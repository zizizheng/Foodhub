import { UpdateDonationComponent } from './../update-donation/update-donation.component';
import { SearchTemplateComponent } from './../../../template/search-template.component';
import { Component, enableProdMode, ModuleWithProviders, Injector } from '@angular/core';
import { ServerService } from '../../../service/server.service';
import * as itemCat from '../donation.model';
import { Donation } from '../donation.model';

declare let swal:any;

@Component({
  selector: 'search-donation',
  templateUrl: `./search-donation.component.html`,
  // directives: [ UpdateDonationComponent ]
})
export class SearchDonationComponent extends SearchTemplateComponent {

    exList: Array<{}>;
    exTem: Array<{}>;

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.category = itemCat.Category;
        this.categorySearch = itemCat.CategorySearch;
        this.categoryKey = itemCat.CategoryKey;
        this.dataList = new Array<Donation>();
        this.primaryKey = 'dn_id';
        this.parentUrl = this.serverService.getDonationUrl('');
        this.listUrl = this.serverService.getDonationUrl('list');
        this.exList = [];
        this.exTem = [];
    }

    ngOnInit(){
        this.GetList( this.listUrl, this.primaryKey ); 
    }

    giveClick(){
        this.exTem.forEach( (dn:Donation) => {
            this.exList.push({
                dn_id: dn.dn_id,
                name: dn.item_name,
                unit: dn.item_unit,
                qt: dn.item_qt
            });
        });
    }

    updateClick(item){
        this.cleanPage();
        this.selectedItem = item;
        this.updateBut = true;
    }

    cleanPage(){
        this.updateBut = false;
    }

    // TODO : check search key
    searchClick(){
        this.dataList = [];
        let keyInEng = this.categoryKey[this.categorySearch.indexOf(this.searchKey)]; 

        this.searchContent = (keyInEng === 'expire_dt')
                           ? Date.parse(this.searchContent).toString() : this.searchContent;
        let url = (keyInEng === 'barcode') 
                ? this.serverService.getBarcodeUrl(this.searchContent)
                : this.serverService.getDonationUrl(this.searchContent);

        let urlParam = keyInEng;
        this.Search(url, urlParam);
    }

    checkChange(item, checked, index){
        console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(object => 
                    object.primaryKey == item[this.primaryKey])[0].checked = checked;
        if (checked) this.exTem.push(item);
        else this.exTem.splice(index, 1);
        console.log(this.delArray);
    }

    deleteClick(){
        this.Delete();
    }

    searchChange(value){
        if ( value === '品項類別' || value === '倉庫地區'){
            this.category = (value === '品項類別') ? itemCat.Category : itemCat.Warehouse;
            this.selectCat = true;
            this.searchContent = '';
        }
        else this.selectCat = false;
    }

    notifyUpdate(isUpdate){
        // console.log('got emit');
        if( isUpdate ){
            this.GetList( this.listUrl, this.primaryKey );
        }
        this.updateBut = false;
    }
}
