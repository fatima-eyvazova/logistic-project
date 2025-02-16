import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './singlepage.component';
import { RouterModule } from '@angular/router';
// import { HomeComponent } from '../../components/singlePage/home/home.component';
// import { AboutComponent } from '../../components/singlePage/about/about.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SinglepageComponent,
        children: [
          // { path: '', component: HomeComponent },
          // { path: 'about', component: AboutComponent },
        ],
      },
    ]),
  ],
})
export class SinglepageModule {}
