import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { SinglepageModule } from './app/pages/singlepage/singlepage.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './app/pages/register/register.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      RouterModule,
      SinglepageModule,
      NgApexchartsModule,
      RegisterModule,
      FormsModule,
      CommonModule,
      ReactiveFormsModule
    ),
  ],
}).catch((err) => console.error(err));
