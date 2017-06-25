import { AddTemplateComponent } from './../../../template/add-template.component';
import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { Donor } from '../donor.model';
import { ServerService } from '../../../service/server.service';

import * as donorCat from '../donor.model';
declare let swal: any;

@Component({
    selector: 'add-donor',
    templateUrl: `./add-donor.component.html`,
    styleUrls: ['./../../../template/add-template.component.css']
})
export class AddDonorComponent extends AddTemplateComponent {
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();
    pack: any;
    isGroup = false;
    donor = new Donor();
    category = [];
    area = [];

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.category = donorCat.Category;
        this.area = donorCat.Area;
    }

    addDonorClick() {
        let donorObject = this.donor.getObject();
        let url = this.serverService.getDonorUrl(this.donor.donor_name);
        this.Add(url, donorObject, true, this.emitChange.bind(this));
    }

    catChange(value) {
        console.log(value);
        this.isGroup = (value === '團體') ? true : false;
    }

    cleanClick() {

    }

    emitChange() {
        this.updated.emit(true);
    }
}
