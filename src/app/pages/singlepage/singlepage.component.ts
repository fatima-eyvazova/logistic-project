import { Component } from '@angular/core';
import { AboutComponent } from '../../components/singlePage/about/about.component';
import { HomeComponent } from '../../components/singlePage/home/home.component';
import { RouterModule } from '@angular/router';
import { TrackingComponent } from '../../components/singlePage/tracking/tracking.component';
import { ServiceComponent } from '../../components/singlePage/service/service.component';
import { PartnersComponent } from '../../components/singlePage/partners/partners.component';
import { ContactComponent } from '../../components/singlePage/contact/contact.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  imports: [
    AboutComponent,
    HomeComponent,
    RouterModule,
    TrackingComponent,
    ServiceComponent,
    PartnersComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SinglepageComponent {}
