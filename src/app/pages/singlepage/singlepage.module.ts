import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinglepageComponent } from './singlepage.component';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from '../../components/singlePage/service/service.component';
import { PartnersComponent } from '../../components/singlePage/partners/partners.component';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceComponent,
    PartnersComponent,
    ScrollAnimationDirective,
    RouterModule.forChild([
      {
        path: '',
        component: SinglepageComponent,
      },
    ]),
  ],
  exports: [PartnersComponent],
})
export class SinglepageModule {}
