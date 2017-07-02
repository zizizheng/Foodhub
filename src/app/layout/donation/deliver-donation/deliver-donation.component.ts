import { UpdateDonationComponent } from './../update-donation/update-donation.component';
import { SearchTemplateComponent } from './../../../template/search-template.component';
import { Component, enableProdMode, ModuleWithProviders, Injector, Output } from '@angular/core';
import { ServerService } from '../../../service/server.service';
import * as itemCat from '../stock.model';
import { Stock } from '../stock.model';
import { DatePipe } from '@angular/common';

declare let swal: any;

@Component({
	selector: 'deliver-donation',
	templateUrl: `./deliver-donation.component.html`,
	// directives: [ UpdateDonationComponent ]
})
export class DeliverDonationComponent extends SearchTemplateComponent {
	exList: Array<{}>;
	exTem: Array<{}>;
	inputDate: boolean;

	constructor(injector: Injector,
		private serverService: ServerService) {
		super(injector);
		this.category = itemCat.Category;
		this.categorySearch = itemCat.CategorySearch;
		this.categoryKey = itemCat.CategoryKey;
		this.dataList = new Array<Stock>();
		this.primaryKey = 'dn_id';
		this.parentUrl = this.serverService.getStockUrl('');
		this.listUrl = this.serverService.getStockUrl('list');
		this.exList = [];
		this.exTem = [];
		this.inputDate = false;
	}

	ngOnInit() {
		this.ShowList();
	}

	deliverClick() {
		this.exTem.forEach((st: any) => {
			this.exList.push({
				stock_id: st._id,
				item_name: st.item_name,
				item_unit: st.item_unit,
				item_qt: 0,
				stock_qt: st.item_qt,
				expire_dt: new DatePipe('en').transform(st.expire_dt, 'yyyy-MM-dd')
			});
		});
		this.exTem.splice(0);
		this.CheckAllChange(false);
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
	// Search from stock
	searchClick() {
		this.dataList = [];
		let keyInEng = this.categoryKey[this.categorySearch.indexOf(this.searchKey)];

		this.searchContent = (keyInEng === 'expire_dt')
			? Date.parse(this.searchContent).toString() : this.searchContent;
		let url = this.serverService.getStockUrl(this.searchContent);

		let urlParam = keyInEng;
		this.Search(url, urlParam);
	}

	CheckChange(item, checked) {
		// console.log(index);
		// check for delete
		this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;

		if (checked) {
			// Find the index of item. Not find(checked yet) -> push, Find(already check) -> delete
			let i = this.exTem.findIndex((o) => { return o['item_name'] === item.item_name; });
			if (i < 0) this.exTem.push(item);
			else this.exTem.splice(i, 1);
		}
		// console.log(this.exTem);
	}

	deleteClick() {
		this.Delete();
	}

	searchChange(value) {
		this.selectCat = false;
		this.inputDate = false;
		this.searchContent = '';
		if (value === '品項類別') {
			this.category = itemCat.Category;
			this.selectCat = true;
		}
		else if (value === '過期日') {
			this.inputDate = true;
		}
	}

	notifyUpdate(isUpdate) {
		// console.log('got emit');
		if (isUpdate) {
			this.ShowList();
		}
		this.updateBut = false;
	}
}
