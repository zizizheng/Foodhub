import { UpdateDonationComponent } from './../update-donation/update-donation.component';
import { SearchTemplateComponent } from './../../../template/search-template.component';
import { Component, enableProdMode, ModuleWithProviders, Injector } from '@angular/core';
import { ServerService } from '../../../service/server.service';
import * as itemCat from '../donation.model';
import { Donation } from '../donation.model';

declare let swal: any;

@Component({
	selector: 'deliver-donation',
	templateUrl: `./deliver-donation.component.html`,
	// directives: [ UpdateDonationComponent ]
})
export class DeliverDonationComponent extends SearchTemplateComponent {

	exList: Array<{}>;
	exTem: Array<{}>;

	constructor(injector: Injector,
		private serverService: ServerService) {
		super(injector);
		this.category = itemCat.Category;
		this.categorySearch = itemCat.CategorySearch;
		this.categoryKey = itemCat.CategoryKey;
		this.dataList = new Array<Donation>();
		this.primaryKey = 'dn_id';
		this.parentUrl = this.serverService.getStockUrl('');
		this.listUrl = this.serverService.getStockUrl('list');
		this.exList = [];
		this.exTem = [];
	}

	ngOnInit() {
		this.ShowList();
	}

	giveClick() {
		this.exTem.forEach((dn: Donation) => {
			this.exList.push({
				dn_id: dn.dn_id,
				name: dn.item_name,
				unit: dn.item_unit,
				qt: dn.item_qt
			});
		});
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
		let url = (keyInEng === 'barcode')
			? this.serverService.getStockBarcodeUrl(this.searchContent)
			: this.serverService.getStockUrl(this.searchContent);

		let urlParam = keyInEng;
		this.Search(url, urlParam);
	}

	checkChange(item, checked, index) {
		// console.log(index);
		// check for delete
		this.delArray.filter(object => object.primaryKey == item[this.primaryKey])[0].checked = checked;

		// Find the index of item. Not find(checked yet) -> push, Find(already check) -> delete
		let i = this.exTem.findIndex((o) => { return o['item_name'] === item.item_name; });
		if (i < 0) this.exTem.push(item);
		else this.exTem.splice(i, 1);
		// console.log(this.exTem);
	}

	deleteClick() {
		this.Delete();
	}

	searchChange(value) {
		if (value === '品項類別' || value === '倉庫地區') {
			this.category = (value === '品項類別') ? itemCat.Category : itemCat.Warehouse;
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
