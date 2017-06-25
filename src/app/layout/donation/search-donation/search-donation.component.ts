import { UpdateDonationComponent } from './../update-donation/update-donation.component';
import { SearchTemplateComponent } from './../../../template/search-template.component';
import { Component, enableProdMode, ModuleWithProviders, Injector } from '@angular/core';
import { ServerService } from '../../../service/server.service';
import * as itemCat from '../donation.model';
import { Donation } from '../donation.model';

declare let swal: any;

@Component({
    selector: 'search-donation',
    templateUrl: `./search-donation.component.html`,
})
export class SearchDonationComponent extends SearchTemplateComponent {
    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.category = itemCat.Category;
        this.categorySearch = itemCat.CategorySearch;
        this.categoryKey = itemCat.CategoryKey;
        this.dataList = new Array<Donation>();
        this.primaryKey = 'dn_id';
        this.parentUrl = this.serverService.getDonationUrl('');
        this.listUrl = this.serverService.getDonationUrl('list');
    }

    ngOnInit() {
        this.ShowList();
    }

    updateClick(item) {
        // console.log(item);
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
            : this.serverService.getDonationUrl(this.searchContent);

        let urlParam = keyInEng;
        this.Search(url, urlParam);
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
