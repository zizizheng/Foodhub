import { ServerService } from './../../../service/server.service';
import { PosSystemService } from './../../../service/pos-system.service';
import { UpdateTemplateComponent } from './../../../template/update-template.component';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Injector } from '@angular/core';
import { Donee } from '../donee.model';
import * as itemCat from '../donee.model';

declare let swal: any;

@Component({
    selector: 'update-donee',
    templateUrl: `./update-donee.component.html`
})
export class UpdateDoneeComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();


    donee: Donee;
    category = itemCat.Category;
    nameChange = false;
    curName = '';

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.donee = new Donee();
    }

    ngOnInit() {
        this.initialForm();
    }

    ngOnChanges() {
        this.curName = this.donee.donee_name;
    }

    onSumbit() {
        let itemObject = this.donee.getObject();
        let url = this.serverService.getDoneeUrl(this.donee.donee_name);
        if (this.nameChange === true) {
            this.nameChange = false;
            const that = this;
            swal({
                title: '你將要更改受贈者名稱！',
                text: "舊有使用者資料將被刪除",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定更改'
            }).then(function () {
                let delUrl = that.serverService.getDoneeUrl(that.curName);
                that.Update(url, itemObject, true, delUrl).then(
                    (data) => {
                        if (data) {
                            that.updated.emit(true);
                        }
                    }
                );
            })
        }
        else {
            this.Update(url, itemObject).then(
                (data) => {
                    if (data) {
                        this.updated.emit(true);
                    }
                }
            );
        }
    }

    clearClick() {
        this.updated.emit(false);
    }

    initialForm() {
        this.donee.pushData(this.inputItem);
        this.curName = this.donee.donee_name;
    }
}