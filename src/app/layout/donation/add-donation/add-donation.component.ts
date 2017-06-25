import { AddTemplateComponent } from '../../../template/add-template.component';
import { ServerService } from './../../../service/server.service';
import { Donation } from '../donation.model';
import { NgForm } from '@angular/forms';
import { Component, Injector, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as itemCat from '../donation.model';
declare let swal: any;

@Component({
    selector: 'add-donation',
    templateUrl: `./add-donation.component.html`,
    styleUrls: ['./../../../template/add-template.component.css']
})
export class AddDonationComponent extends AddTemplateComponent implements OnInit {
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();
    dn_id: number;
    barcodeLength: number;
    donor_name: string;
    dnUrl: string;
    donations = [];
    memo: string;
    pack: any;
    contractor: string;
    donate_dt;
    category = itemCat.Category;
    area = itemCat.Warehouse;

    constructor(injector: Injector,
        private serverService: ServerService,
        private ref: ChangeDetectorRef) {
        super(injector);
        this.barcodeLength = 0;
    }

    ngOnInit() {
        this.dnUrl = this.serverService.getDonationUrl('');
        this.GetSpecificData(this.dnUrl + 'max_dnid')
            .then((data: number) => this.dn_id = data + 1);
        this.donate_dt = new DatePipe('en').transform(Date.now(), 'yyyy-MM-dd');
        this.newRow();
    }

    addDonation() {
        let comp = this;
        let url = this.dnUrl + this.dn_id;
        // console.log(this.dnUrl);
        this.donations.forEach(
            (dn: Donation) => {
                dn.donor_name = comp.donor_name;
                dn.donate_dt = comp.donate_dt;
                dn.memo = comp.memo;
                dn.contractor = comp.contractor;
                comp.Add(url, dn.getObject(), false, comp.emitChange.bind(comp));
            }
        );
    }

    keyBarcode(e, barcode, item) {
        if (barcode !== undefined && barcode.length > this.barcodeLength)
            this.fillByBarcode(barcode, item);
    }

    fillByBarcode(barcode, item) {
        // $('#barcodeInput').removeClass('success fail');
        let comp = this;
        let url = this.serverService.getBarcodeUrl(barcode);
        this.GetSpecificData(url).then((res) => {
            item.item_name = res['item_name'];
            item.item_unit = res['item_unit'];
            item.item_unitprice = res['item_unitprice'];
            setTimeout(function () { }, 2500);

        }).catch(function (e) {
            // add warning to input
            console.log('oh fuck i cant find anything');
            // $('#barcodeInput').addClass('fail');
        });
    }

    newRow() {
        this.donations[this.donations.length] = new Donation();
        this.ref.detectChanges();
        // console.log(this.donations);
        console.log(this.donate_dt);
    }

    delRow() {
        this.donations.pop();
    }

    cleanClick() {
        this.donations = [];
        this.donor_name = '';
        this.contractor = '';
    }

    emitChange() {
        this.updated.emit(true);
    }

}
