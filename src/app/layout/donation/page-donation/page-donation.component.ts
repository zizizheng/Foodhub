import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-donation',
    templateUrl: `./page-donation.component.html`
})
export class PageDonationComponent implements OnInit {
    selectedBut: string;

    ngOnInit(): void {
        this.selectedBut = "donation";
    }

    butClick(_selectedBut: string) {
        this.selectedBut = _selectedBut;
        //alert(this.selectedBut);
    }

    notifyUpdate(bool) {
        if (bool) this.ngOnInit();
    }
}
