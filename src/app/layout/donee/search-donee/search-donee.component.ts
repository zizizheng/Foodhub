import { SearchTemplateComponent } from './../../../template/search-template.component';
import { ServerService } from './../../../service/server.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Donee } from '../donee.model';

import * as doneeCat from '../donee.model';
declare let swal: any;

@Component({
    selector: 'searchDonee',
    templateUrl: `./search-donee.component.html`
})
export class SearchDoneeComponent extends SearchTemplateComponent implements OnInit {

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.category = doneeCat.Category;
        this.categorySearch = doneeCat.CategorySearch;
        this.categoryKey = doneeCat.CategoryKey;
        this.primaryKey = doneeCat.PrimaryKey;
        this.parentUrl = this.serverService.getDoneeUrl('');
        this.listUrl = this.serverService.getDoneeUrl('list');
        this.dataList = new Array<Donee>();
    }

    ngOnInit() {
        this.ShowList();
    }

    searchClick() {
        this.dataList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey);
        let url = this.serverService.getDoneeUrl(this.searchContent);
        let urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    }

    checkChange(item, checked) {
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;
    }

    deleteClick() {
        this.Delete();
    }

    searchChange(value) {
        this.selectCat = (value === '單位分類') ? true : false;
        this.searchContent = '';
    }

    updateClick(donee) {
        this.selectedItem = donee;
        this.updateBut = true;
    }

    notifyUpdate(isUpdate) {
        // console.log('got emit');
        if (isUpdate) this.ShowList();
        this.updateBut = false;
    }
}
