import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-user',
    templateUrl: `./page-user.component.html`
})
export class PageUserComponent implements OnInit {
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
