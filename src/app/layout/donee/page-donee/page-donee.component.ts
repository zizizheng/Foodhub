import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-donee',
  templateUrl: `app/layout/donee/page-donee/page-donee.component.html`
})
export class PageDoneeComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
