import { ServerService } from './../../../service/server.service';
import { Donee } from '../donee.model';
import { Component, Injector, Output, EventEmitter } from '@angular/core';
import { AddTemplateComponent } from '../../../template/add-template.component';
import * as doneeCat from '../donee.model';

@Component({
    selector: 'add-donee',
    templateUrl: `./add-donee.component.html`,
    styleUrls: ['./../../../template/add-template.component.css']
})
export class AddDoneeComponent extends AddTemplateComponent {
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();
    pack: any;
    donee = new Donee();
    category = [];

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.category = doneeCat.Category;
    }

    addDoneeClick() {
        let doneeObject = this.donee.getObject();
        let url = this.serverService.getDoneeUrl(this.donee.donee_name);
        this.Add(url, doneeObject, true, this.emitChange.bind(this));
    }

    cleanClick() {
        this.donee = new Donee();
    }

    emitChange() {
        this.updated.emit(true);
    }

}
