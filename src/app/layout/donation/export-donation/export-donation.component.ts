import { Donation } from '../donation.model';
import { Component, OnInit, Injector, Input } from '@angular/core';

@Component({
  selector: 'export-donation',
  templateUrl: `./export-donation.component.html`
})
export class ExportDonationComponent implements OnInit {
    @Input() exList: Array<Donation>;

    constructor(){

    }

    ngOnInit(): void {
    }

    delEx(index){
        this.exList.splice(index, 1);
    }
}



