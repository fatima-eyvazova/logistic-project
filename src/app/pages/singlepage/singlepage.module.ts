import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinglepageComponent } from './singlepage.component';
import { HomeComponent } from '../../components/singlePage/home/home.component';
import { AboutComponent } from '../../components/singlePage/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    SinglepageComponent,
    HomeComponent,
    AboutComponent,

    RouterModule.forChild([
      {
        path: '',
        component: SinglepageComponent,
      },
    ]),
  ],
  exports: [SinglepageComponent],
})
export class SinglepageModule {}
