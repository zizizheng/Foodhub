import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-donee',
    templateUrl: `./page-donee.component.html`
})
export class PageDoneeComponent implements OnInit {
    selectedBut: string;
    ngOnInit(): void {
        this.selectedBut = 'search';
    }

    butClick(_selectedBut: string) {
        this.selectedBut = _selectedBut;
    }

    notifyUpdate(e) {
        if (e) this.ngOnInit();
    }
}
