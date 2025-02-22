import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  imports: [CommonModule, ScrollAnimationDirective],
})
export class PartnersComponent implements OnInit {
  partners = [
    {
      name: 'Azerbaijan Railways',
      img: 'images/ady.svg',
      description:
        'The leading railway operator in Azerbaijan, providing modern solutions for regional and international transportation.',
    },
    {
      name: 'Absheron Logistics',
      img: 'images/abs.svg',
      description:
        'A trusted logistics company offering fast and high-quality solutions with extensive expertise in the field.',
    },
    {
      name: 'SIGIS',
      img: 'images/sigis.svg',
      description:
        'A reliable transportation company ensuring efficiency and innovation through technology-driven logistics solutions.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
