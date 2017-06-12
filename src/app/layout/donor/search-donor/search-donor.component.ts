import { ServerService } from './../../../service/server.service';
import { SearchTemplateComponent } from './../../../template/search-template.component';
import { Component, Injector, OnInit } from '@angular/core';
import { Donor, Area } from '../donor.model';

import * as donorCat from '../donor.model';
declare let swal: any;

@Component({
    selector: 'search-donor',
    templateUrl: `./search-donor.component.html`
})
export class SearchDonorComponent extends SearchTemplateComponent implements OnInit {
    private area = [];

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.area = donorCat.Area;
        this.category = donorCat.Category;
        this.categorySearch = donorCat.CategorySearch;
        this.categoryKey = donorCat.CategoryKey;
        this.primaryKey = donorCat.PrimaryKey;
        this.parentUrl = this.serverService.getDonorUrl('');
        this.listUrl = this.serverService.getDonorUrl('list');
        this.dataList = new Array<Donor>();
    }

    ngOnInit() {
        this.GetList(this.listUrl, this.primaryKey);
    }

    searchClick() {
        this.dataList = [];
        let keyIndex = this.categorySearch.indexOf(this.searchKey);
        let url = this.serverService.getDonorUrl(this.searchContent);
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
        this.selectCat = (value === '分類') ? true : false;
        this.searchContent = '';
    }

    updateClick(donor) {
        this.selectedItem = donor;
        this.updateBut = true;
    }

    notifyUpdate(isUpdate) {
        // console.log('got emit');
        // console.log(isUpdate);
        if (isUpdate) {
            this.GetList(this.listUrl, this.primaryKey);
        }
        this.updateBut = false;
    }
}
