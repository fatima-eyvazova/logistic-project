import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglepageComponent } from './singlepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SinglepageComponent,
        children: [],
      },
    ]),
  ],
})
export class SinglepageModule {}
