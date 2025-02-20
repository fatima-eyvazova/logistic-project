import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { SinglepageModule } from './app/pages/singlepage/singlepage.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      RouterModule,
      SinglepageModule,
      NgApexchartsModule,
      FormsModule,
      CommonModule
    ),
  ],
}).catch((err) => console.error(err));
