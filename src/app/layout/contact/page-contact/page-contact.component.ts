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
            name: 'Erica', title: '志工', fb: '', github: '', web: '',
            photo: '../../../../assets/img/erica.jpg'
        },
        {
            name: 'AnChe', title: '後端工程師',
            fb: 'https://www.facebook.com/Wastelandshadow',
            github: 'https://github.com/AnCheTeng',
            web: '',
            photo: '../../../../assets/img/anche.jpg'
        },
        {
            name: 'Zizi', title: '前端工程師',
            fb: 'https://www.facebook.com/zizi.zheng.1',
            github: 'https://github.com/zizizheng',
            web: '',
            photo: '../../../../assets/img/zizi.jpg'
        }
    ];
}
