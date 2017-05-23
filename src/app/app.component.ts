import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(){
        PageScrollConfig.defaultDuration = 500;
    }
}
