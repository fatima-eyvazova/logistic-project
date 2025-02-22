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
      imgSrc: 'images/3.png',
      iconSrc: 'images/car.svg',
      counter: 11,
      label: 'Delivered Goods',
      imgWidth: '300px',
      imgHeight: '300px',
    },
    {
      imgSrc: 'images/1.png',
      iconSrc: 'images/car.svg',
      counter: 8,
      label: 'Delivered Goods',
      imgWidth: '300px',
      imgHeight: '300px',
    },
    {
      imgSrc: 'images/2.png',
      iconSrc: 'images/car.svg',
      counter: 15,
      label: 'Delivered Goods',
      imgWidth: '300px',
      imgHeight: '300px',
    },
    {
      imgSrc: 'images/4.png',
      iconSrc: 'images/car.svg',
      counter: 20,
      label: 'Delivered Goods',
      imgWidth: '300px',
      imgHeight: '300px',
    },
  ];
}
