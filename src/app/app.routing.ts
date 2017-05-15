import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { PageUserComponent } from './layout/user/page-user/page-user.component';
import { PageContactComponent } from './layout/contact/page-contact/page-contact.component';
import { PageDoneeComponent } from './layout/donee/page-donee/page-donee.component';
import { PageDonorComponent } from './layout/donor/page-donor/page-donor.component';
import { PageDonationComponent } from './layout/donation/page-donation/page-donation.component';
import { ExpiryComponent } from './layout/expiry/expiry.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'page-login', pathMatch: 'full' },
    { path: 'page-login', component: LoginComponent },
    { path: 'page-expiry', component: ExpiryComponent },
    { path: 'page-donation', component: PageDonationComponent },
    { path: 'page-donor', component: PageDonorComponent },
    { path: 'page-donee', component: PageDoneeComponent },
    { path: 'page-user', component: PageUserComponent },
    { path: 'page-contact', component: PageContactComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
