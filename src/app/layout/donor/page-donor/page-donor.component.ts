import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-donor',
  templateUrl: `app/layout/donor/page-donor/page-donor.component.html`
})
export class PageDonorComponent implements OnInit {
    private selectedBut = 'search';
    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
    }
}
