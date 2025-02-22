import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-service',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent implements OnInit {
  features = [
    {
      icon: 'images/ca-work-1.1.svg',
      title: 'Modern Technologies',
      description:
        'We implement advanced monitoring systems to track your cargo 24/7.',
    },
    {
      icon: 'images/ca-work-1.2.svg',
      title: 'Maximum Accuracy',
      description: 'Error minimization through intelligent algorithms.',
    },
    {
      icon: 'images/ca-work1.3.svg',
      title: 'Transparency and Trust',
      description: 'You always know the exact location of your cargo.',
    },
    {
      icon: 'images/ca-work1.4.svg',
      title: 'Time Efficiency',
      description: 'We streamline delivery and data processing workflows.',
    },
  ];
  slides = [
    {
      imgSrc: 'images/5.png',
      altText: 'Cargo Tracking',
      title: 'Real-time Cargo Tracking',
      description:
        'Monitor the location and status of your cargo 24/7 with advanced GPS and tracking technologies. Get live updates on your shipments, ensuring complete visibility and control over your logistics.',
      iconSrc: 'images/ca-expand-ic3.1.svg',
      extraClass: 'active',
    },
    {
      imgSrc: 'images/6.png',
      altText: 'Data Analysis',
      title: 'Accurate Data Analysis',
      description:
        'Our intelligent systems leverage big data and predictive analytics to minimize errors and provide detailed insights into transportation conditions and potential delays.',
      iconSrc: 'images/ca-expand-ic3.1.svg',
      extraClass: 'active',
    },
    {
      imgSrc: 'images/7.png',
      altText: 'Personalized Solutions',
      title: 'Personalized Solutions',
      description:
        'We offer customized logistics solutions tailored to your specific needs, ensuring flexibility and efficiency in cargo handling and delivery schedules.',
      iconSrc: 'images/ca-expand-ic3.1.svg',
      extraClass: '',
    },
    {
      imgSrc: 'images/8.png',
      altText: 'International and Local Routes',
      title: 'International and Local Routes',
      description:
        'We cover both international and local delivery routes, ensuring secure and timely transportation solutions for your cargo anywhere in the world.',
      iconSrc: 'images/ca-expand-ic3.1.svg',
      extraClass: '',
    },
  ];

  ngOnInit(): void {}
}
