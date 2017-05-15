import { AddTemplateComponent } from './../../../template/add-template.component';
import { Component, OnInit, Injector } from '@angular/core';
import { Donor } from '../donor.model';
import { ServerService } from '../../../service/server.service';

import * as donorCat from '../donor.model';
declare let swal:any;

@Component({
    selector: 'addDonor',
    templateUrl: `./add-donor.component.html`,
    // styleUrls: ['app/template/addTemplate.component.css']
})
export class AddDonorComponent extends AddTemplateComponent {
    pack: any;
    isGroup = false;
    donor = new Donor();
    category = [];
    area = [];

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.category = donorCat.Category;
        this.area = donorCat.Area;
    }

    addDonorClick(){
      let donorObject = this.donor.getObject();
      let url = this.serverService.getDonorUrl(this.donor.donor_name);
      this.Add(url, donorObject);
    }

    catChange(value){
        console.log(value);
        this.isGroup = ( value === '團體' ) ? true : false; 
    }
}
