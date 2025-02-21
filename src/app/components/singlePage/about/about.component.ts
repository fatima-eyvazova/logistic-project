import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule, ScrollAnimationDirective],
})
export class AboutComponent {
  checklistItems = [
    { title: 'Experts in Logistics Management' },
    { title: 'Leaders in Global Logistics' },
    { title: 'Transforming Transport & Logistics' },
    { title: 'Driving Logistics Success' },
  ];

  cards = [
    {
      imgSrc: 'https://glloc.com/assets/img/test/2.png',
      iconSrc: 'https://glloc.com/assets/img/test/2.png',
      counter: 11,
      label: 'Delivered Goods',
      imgWidth: '306px',
      imgHeight: '300px',
    },
    {
      imgSrc: 'https://glloc.com/assets/img/test/2.png',
      iconSrc: 'https://glloc.com/assets/img/test/2.png',
      counter: 8,
      label: 'Delivered Goods',
      imgWidth: '306px',
      imgHeight: '186px',
    },
    {
      imgSrc: 'https://glloc.com/assets/img/test/2.png',
      iconSrc: 'https://glloc.com/assets/img/test/2.png',
      counter: 15,
      label: 'Delivered Goods',
      imgWidth: '306px',
      imgHeight: '216px',
    },
    {
      imgSrc: 'https://glloc.com/assets/img/test/2.png',
      iconSrc: 'https://glloc.com/assets/img/test/2.png',
      counter: 20,
      label: 'Delivered Goods',
      imgWidth: '306px',
      imgHeight: '325px',
    },
  ];
}
