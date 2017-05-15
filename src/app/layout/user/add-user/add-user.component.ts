import { AddTemplateComponent } from './../../../template/add-template.component';
import { Component, Injector } from '@angular/core';
import { User } from '../user.model';
import { ServerService } from '../../../service/server.service';
import * as userCat from '../user.model';

@Component({
    selector: 'addUser',
    templateUrl: `./add-user.component.html`,
    // styleUrls: ['app/template/addTemplate.component.css']
})
export class AddUserComponent extends AddTemplateComponent {
    pack: any;
    user = new User();
    area = [];
    authCat = [];

    constructor(injector:Injector,
                private serverService: ServerService){
        super(injector);
        this.area = userCat.Area;
        this.authCat = userCat.Auth;
    }

    ngOnInit(): void{}

    addUserClick(){
      let userObject = this.user.getObject();
      let url = this.serverService.getUserUrl(this.user.account);
      this.Add(url, userObject);
    }
}
