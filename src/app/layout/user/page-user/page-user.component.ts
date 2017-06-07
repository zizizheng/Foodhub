import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-user',
    templateUrl: `./page-user.component.html`
})
export class PageUserComponent implements OnInit {
    selectedBut = 'search';
    ngOnInit(): void { }

    butClick(_selectedBut: string) {
        this.selectedBut = _selectedBut;
    }
}
