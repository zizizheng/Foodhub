import { ServerService } from './../../../service/server.service';
import { UpdateTemplateComponent } from './../../../template/update-template.component';
import { Component, OnInit, Injector, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Donor } from '../donor.model';
import * as itemCat from '../donor.model';

declare let swal: any;

@Component({
    selector: 'update-donor',
    templateUrl: `./update-donor.component.html`
})
export class UpdateDonorComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

    isGroup = false;
    donor: Donor;
    category = itemCat.Category;
    area = itemCat.Area;
    nameChange = false;
    curName = '';

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.donor = new Donor();
    }

    ngOnInit() {
        this.initialForm();
    }

    ngOnChanges() {
        console.log('change');
        this.curName = this.donor.donor_name;
    }

    onSumbit() {
        let itemObject = this.donor.getObject();
        let url = this.serverService.getDonorUrl(this.donor.donor_name);

        if (this.nameChange === true) {
            this.nameChange = false;
            const that = this;
            swal({
                title: '你將要更改捐贈者名稱！',
                text: "舊有使用者資料將被刪除",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '確定更改'
            }).then(function () {
                let delUrl = that.serverService.getDonorUrl(that.curName);
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

    catChange(value) {
        this.isGroup = (value === "團體") ? true : false;
    }

    initialForm() {
        this.donor.pushData(this.inputItem);
        this.curName = this.donor.donor_name;
    }
}
