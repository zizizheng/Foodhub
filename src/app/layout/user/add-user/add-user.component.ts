import { AddTemplateComponent } from './../../../template/add-template.component';
import { Component, Injector, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { ServerService } from '../../../service/server.service';
import * as userCat from '../user.model';

@Component({
    selector: 'add-user',
    templateUrl: `./add-user.component.html`,
    styleUrls: ['./../../../template/add-template.component.css']
})
export class AddUserComponent extends AddTemplateComponent {
    @Output() updated: EventEmitter<boolean> = new EventEmitter<boolean>();
    pack: any;
    user = new User();
    area = [];
    authCat = [];

    constructor(injector: Injector,
        private serverService: ServerService) {
        super(injector);
        this.area = userCat.Area;
        this.authCat = userCat.Auth;
    }

    ngOnInit(): void { }

    addUserClick() {
        let userObject = this.user.getObject();
        let url = this.serverService.getUserUrl(this.user.account);
        this.Add(url, userObject, true, this.emitChange.bind(this));
    }

    emitChange() {
        this.updated.emit(true);
    }
}
