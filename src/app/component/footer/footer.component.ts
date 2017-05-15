import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-footer',
  templateUrl: `./footer.component.html`
})
export class FooterComponent {

    constructor(private router: Router){
    }
}
