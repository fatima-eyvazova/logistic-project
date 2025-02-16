import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  imports: [CommonModule],
})
export class PartnersComponent implements OnInit {
  partners = [
    {
      name: 'Azerbaijan Railways',
      img: 'https://glloc.com/assets/img/partners/abs.svg',
      description:
        'The leading railway operator in Azerbaijan, providing modern solutions for regional and international transportation.',
    },
    {
      name: 'Absheron Logistics',
      img: '../../../assets/img/partners/abs.svg',
      description:
        'A trusted logistics company offering fast and high-quality solutions with extensive expertise in the field.',
    },
    {
      name: 'SIGIS',
      img: '../../../assets/img/partners/sigis.svg',
      description:
        'A reliable transportation company ensuring efficiency and innovation through technology-driven logistics solutions.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
