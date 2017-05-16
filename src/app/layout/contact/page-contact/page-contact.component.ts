import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-contact',
    templateUrl: `./page-contact.component.html`,
    styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent {
    webDeveloper = [
        { 
            name: 'Erica', title: 'ProjectManager', fb:'', github:'', web:'', 
            photo:'http://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png'
        },
        { 
            name: 'AnChe', title: 'Backend Developer', 
            fb:'', 
            github:'', 
            web:'', 
            photo:'../../../../assets/img/anche.jpg'
        },
        { 
            name: 'Zizi', title: 'Frontend Developer', 
            fb:'https://www.facebook.com/zizi.zheng.1', 
            github:'https://github.com/zizizheng',
            web:'',
            photo:'../../../../assets/img/zizi.jpg'
        }
    ];
}
