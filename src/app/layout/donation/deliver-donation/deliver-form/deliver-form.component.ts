import { inject } from '@angular/core/testing';
import { AddTemplateComponent } from './../../../../template/add-template.component';
import { ServerService } from './../../../../service/server.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, Injector, Input, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../../stock.model';

@Component({
	selector: 'deliver-form',
	templateUrl: `./deliver-form.component.html`,
	styleUrls: ['./deliver-form.component.css']
})
export class DeliverFormComponent extends AddTemplateComponent implements OnInit {
	@Input() exList: Array<Stock>;
	dv_id: number;
	dvUrl: string;
	donee_name: string;
	delivery_dt;
	constractor: string;

	constructor(injector: Injector,
		private serverService: ServerService,
		private ref: ChangeDetectorRef) {
		super(injector);
	}

	ngOnInit(): void {
		this.dvUrl = this.serverService.getDeliveryUrl('');
		this.GetSpecificData(this.dvUrl + 'max_dvid').then((data: number) => this.dv_id = data + 1);
		this.delivery_dt = new DatePipe('en').transform(Date.now(), 'yyyy-MM-dd');
	}

	delEx(index) {
		this.exList.splice(index, 1);
	}

	deliverClick() {
		this.exList.forEach(element => {
			console.log(element);
		});
	}

	cancelDeliver() {
		this.exList.splice(0);
	}
}



