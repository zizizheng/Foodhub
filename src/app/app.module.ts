import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Service
import { LoginService } from './service/login.service';
import { ServerService } from './service/server.service';
import { PosSystemService } from './service/pos-system.service';

// Expiry
import { ExpiryComponent } from './layout/expiry/expiry.component';

// Donor
import { AddDonorComponent } from './layout/donor/add-donor/add-donor.component';
import { SearchDonorComponent } from './layout/donor/search-donor/search-donor.component';
import { UpdateDonorComponent } from './layout/donor/update-donor/update-donor.component';
import { PageDonorComponent } from './layout/donor/page-donor/page-donor.component';

// Donee
import { PageDoneeComponent } from './layout/donee/page-donee/page-donee.component';
import { AddDoneeComponent } from './layout/donee/add-donee/add-donee.component';
import { SearchDoneeComponent } from './layout/donee/search-donee/search-donee.component';
import { UpdateDoneeComponent } from './layout/donee/update-donee/update-donee.component';

// Donation
import { PageDonationComponent } from './layout/donation/page-donation/page-donation.component';
import { AddDonationComponent } from './layout/donation/add-donation/add-donation.component';
import { SearchDonationComponent } from './layout/donation/search-donation/search-donation.component';
import { UpdateDonationComponent } from './layout/donation/update-donation/update-donation.component';

// User
import { AddUserComponent } from './layout/user/add-user/add-user.component';
import { SearchUserComponent } from './layout/user/search-user/search-user.component';
import { UpdateUserComponent } from './layout/user/update-user/update-user.component';
import { PageUserComponent } from './layout/user/page-user/page-user.component';

// Template
// import { SearchTemplateComponent } from './template/search-template.component';
// import { AddTemplateComponent } from './template/add-template.component';
// import { UpdateTemplateComponent } from './template/update-template.component';

import { PageContactComponent } from './layout/contact/page-contact/page-contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { DeliverDonationComponent } from './layout/donation/deliver-donation/deliver-donation.component';
import { DeliverFormComponent } from './layout/donation/deliver-donation/deliver-form/deliver-form.component';
import { SearchDeliveryComponent } from './layout/donation/search-delivery/search-delivery.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ExpiryComponent,
    AddDonorComponent,
    SearchDonorComponent,
    UpdateDonorComponent,
    PageDonorComponent,
    PageDoneeComponent,
    AddDoneeComponent,
    SearchDoneeComponent,
    UpdateDoneeComponent,
    PageDonationComponent,
    AddDonationComponent,
    SearchDonationComponent,
    UpdateDonationComponent,
    PageContactComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AddUserComponent,
    SearchUserComponent,
    UpdateUserComponent,
    PageUserComponent,
    DeliverDonationComponent,
    DeliverFormComponent,
    SearchDeliveryComponent,
    // SearchTemplateComponent,
    // AddTemplateComponent,
    // UpdateTemplateComponent
  ],
  providers: [
    LoginService, ServerService, PosSystemService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
