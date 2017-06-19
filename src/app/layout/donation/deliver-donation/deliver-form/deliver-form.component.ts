import { Donation } from '../../donation.model';
import { Component, OnInit, Injector, Input } from '@angular/core';

@Component({
	selector: 'deliver-form',
	templateUrl: `./deliver-form.component.html`,
	styleUrls: ['./deliver-form.component.css']
})
export class DeliverFormComponent implements OnInit {
	@Input() exList: Array<Donation>;


	constructor() {

	}

	ngOnInit(): void {
	}

	delEx(index) {

	}

	cancelDeliver() {
		this.exList.splice(0);
	}
}



