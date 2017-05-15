import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-donation',
  templateUrl: `./page-donation.component.html`
})
export class PageDonationComponent implements OnInit {
    private selectedBut = "search";

    ngOnInit(): void{}

    butClick(_selectedBut: string){
        this.selectedBut = _selectedBut;
        //alert(this.selectedBut);
    }

}
