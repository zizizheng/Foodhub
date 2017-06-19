import { SearchTemplateComponent } from './../../../template/search-template.component';
import { ServerService } from './../../../service/server.service';
import { Component, OnInit, Injector } from '@angular/core';
import { User } from '../user.model';
import * as userCat from '../user.model';

@Component({
    selector: 'searchUser',
    templateUrl: `./search-user.component.html`
})
export class SearchUserComponent extends SearchTemplateComponent implements OnInit {

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.categorySearch = userCat.CategorySearch;
        this.categoryKey = userCat.CategoryKey;
        this.dataList = new Array<User>();
        this.primaryKey = userCat.PrimaryKey;
        this.listUrl = this.serverService.getUserUrl('list');
        this.parentUrl = this.serverService.getUserUrl('')
    }

    ngOnInit() {
        this.ShowList();
    }

    searchClick() {
        this.dataList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey);
        let url = this.serverService.getUserUrl(this.searchContent);
        let urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    }

    checkChange(item, checked) {
        //console.log(this.delArray.filter(object => object.primaryKey == item[this.primaryKey]));
        this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;
    }

    deleteClick() {
        this.Delete();
    }

    searchChange(value) {
        this.selectCat = (value === '單位分類') ? true : false;
        this.searchContent = '';
    }

    editClick(user) {
        this.selectedItem = user;
        this.updateBut = true;
    }

    notifyUpdate(isUpdate) {
        // console.log('got emit');
        if (isUpdate) this.ShowList();
        this.updateBut = false;
    }
}
