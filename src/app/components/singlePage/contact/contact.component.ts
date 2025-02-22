import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'images/phone.svg',
      title: 'Call or Text',
      link: 'tel:+994512500701',
      text: '+994 512500701',
    },
    {
      icon: 'images/mail.svg',
      title: 'Send Email',
      link: 'mailto:office@glloc.com',
      text: 'office@glloc.com',
    },
  ];
}
