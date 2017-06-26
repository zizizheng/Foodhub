import { inject } from '@angular/core/testing';
import { AddTemplateComponent } from './../../../../template/add-template.component';
import { ServerService } from './../../../../service/server.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, Injector, Input, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../../stock.model';
import { Delivery } from '../../delivery.model';

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
	contractor: string;
	dv_qt: number;

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
		let that = this;
		let dv = new Delivery();
		let dv_ob;
		let url = this.dvUrl + this.dv_id;
		this.exList.forEach((st) => {
			that.Add(url, dv.getObject({
				...st,
				dv_id: that.dv_id,
				donee_name: that.donee_name,
				delivery_dt: that.delivery_dt,
				contrator: that.contractor
			}));
		});
	}

	cancelDeliver() {
		this.exList.splice(0);
	}
}



