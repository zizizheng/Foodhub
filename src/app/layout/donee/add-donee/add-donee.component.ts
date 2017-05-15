import { ServerService } from './../../../service/server.service';
import { Donee } from '../donee.model';
import { Component, Injector } from '@angular/core';
import { AddTemplateComponent } from '../../../template/add-template.component';
import * as doneeCat from '../donee.model';

@Component({
    selector: 'addDonee',
    templateUrl: `app/layout/donee/add-donee/add-donee.component.html`,
    // styleUrls: ['app/template/addTemplate.component.css']
})
export class AddDoneeComponent extends AddTemplateComponent {
    pack: any;
    donee = new Donee();
    category = [];

    constructor(injector: Injector,
                private serverService: ServerService){
          super(injector);
          this.category = doneeCat.Category;
    }

    addDoneeClick(){
      let doneeObject = this.donee.getObject();
      let url = this.serverService.getDoneeUrl(this.donee.donee_name);
      this.Add(url, doneeObject);
    }

    cleanClick(){
        this.donee = new Donee();
    }
}
