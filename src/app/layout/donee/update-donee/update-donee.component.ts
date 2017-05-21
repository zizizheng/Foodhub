import { ServerService } from './../../../service/server.service';
import { PosSystemService } from './../../../service/pos-system.service';
import { UpdateTemplateComponent } from './../../../template/update-template.component';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, Injector } from '@angular/core';
import { Donee } from '../donee.model';
import * as itemCat from '../donee.model';

@Component({
  selector: 'updateDonee',
  templateUrl: `./update-donee.component.html`
})
export class UpdateDoneeComponent extends UpdateTemplateComponent implements OnInit, OnChanges {
    @Input() public inputItem;
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();


    donee: Donee;
    category = itemCat.Category;
    PosSystemService: PosSystemService;

    constructor(injector: Injector,
                private serverService: ServerService){
        super(injector);
        this.donee = new Donee();
    }

    ngOnInit(){
        this.donee.pushData(this.inputItem);
    }

    ngOnChanges(){
        this.donee.pushData(this.inputItem);
    }

    sendClick(){
        let itemObject = this.donee.getObject();
        let url = this.serverService.getDoneeUrl(this.donee.donee_name);
        this.Update(url, itemObject).then(
            (data) => {
                if(data) this.updated.emit(true);
            }
        );
    }
    
    clearClick(){
        this.updated.emit(false);
    }
}