import { ServerService } from './../service/server.service';
import { Http } from '@angular/http';
import { PosSystemService } from '../service/pos-system.service';
import { Component, OnInit, Input, Injector } from '@angular/core';

declare const swal: any;

@Component({})
export class SearchTemplateComponent {
    updateBut = false;
    delCheck = false;
    selectedBut = false;
    selectCat = false;
    searchContent ='';
    searchKey = '';
    delArray = [];
    category = [];
    categoryKey = [];
    categorySearch = [];
    dataList = [];
    primaryKey = '';
    parentUrl = '';
    listUrl = '';
    selectedItem;
    protected PosSystemService: PosSystemService;

    constructor(injector: Injector){
        this.PosSystemService = injector.get(PosSystemService);
    }
    // tslint:disable-next-line:no-trailing-whitespace
    
    GetList(listUrl, primaryKey){
        this.PosSystemService
            .getDataList(listUrl)
            .subscribe(
                data => {
                    console.log(data);
                    if (this.getType(data) === this.getType([])){
                        this.dataList = data;
                    }
                    else {
                        this.dataList = this.dataList.concat(data);
                    }
                    console.log(this.dataList);
                },
                error => {
                    const err = error.json();
                    swal('Opps, something wrong!', err.error, 'warning');
                },
                () => {
                    this.dealId();
                    this.putIntoChecklist(primaryKey);
                    // console.log(callback);
                }
            );
    }

    Search(url, urlParam){
        this.PosSystemService
            .getData(url, urlParam)
            .subscribe(
                data => {
                    if (this.getType(data) === this.getType([])) {
                        this.dataList = data; 
                    }
                    else {
                        this.dataList.push(data);
                    }
                },
                error => {
                    const err = error.json();
                    swal('Opps, something wrong!', err.error, 'warning');
                },
                () => {
                    // console.log(this.dataList);
                    this.dealId();
                    this.putIntoChecklist(this.primaryKey);
                }
            );

    }

    Delete(){
        this.delCheck = false;
        for(let ob of this.delArray){
            if(ob.checked == true){
                this.delCheck = true;
                break;
            }
        }
        // let that = this;
        if (this.delCheck){
            swal({
                title: '確認刪除?',
                text: '被刪除的紀錄將不能復原',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: '是的，確定刪除',
                cancelButtonText: '取消'
            }).then(() => {
                for ( const ob of this.delArray ){
                    if ( ob.checked ){
                        this.deleteObject(ob.url);
                    }
                }
            });
        }
        else {
            swal("請勾選欲刪除的項目" ,"不然要刪空氣喔", "question");
        }
        
    }

    putIntoChecklist(primaryKey){
        // clean array
        this.delArray = [];
        
        for(let item of this.dataList){
            this.delArray.push({
                primaryKey: item[this.primaryKey],
                checked: false,
                url: this.parentUrl + item[this.primaryKey]
            });
        }
        // console.log(this.delArray);
    }

    deleteObject(ob){
        this.PosSystemService
            .deleteData(ob)
            .subscribe( 
                data => swal('Delete', data.success ,'success'),
                error => {
                    let err = error.json();
                    swal(err.error);
                },
                () => {
                    // refresh form
                    this.GetList(this.parentUrl + 'list', this.primaryKey);
                }
        );
        
    }

    dealId(){
        if (this.getType(this.dataList) === this.getType([])){
            for (let item of this.dataList){
                if(item._id != undefined)
                    item._id = item._id.slice(-8);
            }
        }
        
    }

    getType = function(ele){
        return Object.prototype.toString.call(ele);
    }
}
