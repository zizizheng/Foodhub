import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-donee',
    templateUrl: `./page-donee.component.html`
})
export class PageDoneeComponent implements OnInit {
    selectedBut = 'search';
    ngOnInit(): void { }

    butClick(_selectedBut: string) {
        this.selectedBut = _selectedBut;
    }
}
