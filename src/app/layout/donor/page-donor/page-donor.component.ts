import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-donor',
    templateUrl: `./page-donor.component.html`
})
export class PageDonorComponent implements OnInit {
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
