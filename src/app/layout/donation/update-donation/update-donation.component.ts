import { Donation } from './../donation.model';
import { UpdateTemplateComponent } from './../../../template/update-template.component';
import { PosSystemService } from './../../../service/pos-system.service';
import { Component, Injector, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ServerService } from '../../../service/server.service';

import * as itemCat from '../donation.model';

@Component({
    selector: 'update-donation',
    templateUrl: `./update-donation.component.html`,
    styleUrls: ['./../../../template/update-template.component.css']
})
export class UpdateDonationComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();

    item: Donation;
    category = itemCat.Category;
    area = itemCat.Warehouse;
    PosSystemService: PosSystemService;

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.item = new Donation();
    }

    ngOnInit() {
        this.item.pushData(this.inputItem);
    }

    ngOnChanges() {
        this.item.pushData(this.inputItem);
        console.log(this.item);
    }

    sendClick() {
        let itemObject = this.item.getObject();
        let url = this.serverService.getDonationUrl(this.item.dn_id);
        this.Update(url, itemObject).then(
            (data) => {
                // edit and update, emit true
                if (data) this.updated.emit(true);
            }
        );
    }

    clearClick() {
        // cancel update, emit false
        this.updated.emit(false);
    }

}
