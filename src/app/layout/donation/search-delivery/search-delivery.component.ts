import { ServerService } from './../../../service/server.service';
import { SearchTemplateComponent } from './../../../template/search-template.component';
import { Component, OnInit, Injector } from '@angular/core';
import * as itemCat from '../delivery.model';
import { Delivery } from '../delivery.model';

declare let swal: any;

@Component({
	selector: 'search-delivery',
	templateUrl: './search-delivery.component.html',
	styleUrls: ['./search-delivery.component.css']
})
export class SearchDeliveryComponent extends SearchTemplateComponent {

	constructor(injector: Injector,
		private serverService: ServerService) {
		super(injector);
		this.category = itemCat.Category;
		this.categorySearch = itemCat.CategorySearch;
		this.categoryKey = itemCat.CategoryKey;
		this.dataList = new Array<Delivery>();
		this.primaryKey = 'dv_id';
		this.parentUrl = this.serverService.getDeliveryUrl('');
		this.listUrl = this.serverService.getDeliveryUrl('list');
	}

	ngOnInit() {
		this.ShowList();
	}

	updateClick(item) {
		this.cleanPage();
		this.selectedItem = item;
		this.updateBut = true;
	}

	cleanPage() {
		this.updateBut = false;
	}

	// TODO : check search key
	searchClick() {
		this.dataList = [];
		let keyInEng = this.categoryKey[this.categorySearch.indexOf(this.searchKey)];

		this.searchContent = (keyInEng === 'expire_dt')
			? Date.parse(this.searchContent).toString() : this.searchContent;
		let url = this.serverService.getDeliveryUrl(this.searchContent);

		let urlParam = keyInEng;
		this.Search(url, urlParam);
	}

	checkChange(item, checked) {
		// check for delete
		this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;
	}

	deleteClick() {
		this.Delete();
	}

	searchChange(value) {
		if (value === '品項類別') {
			// this.category = (value === '品項類別') ? itemCat.Category : itemCat.Warehouse;
			this.selectCat = true;
			this.searchContent = '';
		}
		else this.selectCat = false;
	}

	notifyUpdate(isUpdate) {
		// console.log('got emit');
		if (isUpdate) {
			this.ShowList();
		}
		this.updateBut = false;
	}

}
