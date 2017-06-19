import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'my-footer',
	templateUrl: `./footer.component.html`,
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {
	curRouter: Router;
	constructor(public router: Router) {
		this.curRouter = router;
	}
}
