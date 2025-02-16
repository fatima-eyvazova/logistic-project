import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { SinglepageModule } from './app/pages/singlepage/singlepage.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule, RouterModule, SinglepageModule),
  ],
}).catch((err) => console.error(err));
