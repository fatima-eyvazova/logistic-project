import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header', { static: false }) header!: ElementRef;

  ngAfterViewInit() {
    if (this.header) {
      this.header.nativeElement.classList.remove('scrolled');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    if (this.header) {
      if (scrollPosition > 20) {
        this.header.nativeElement.classList.add('scrolled');
      } else {
        this.header.nativeElement.classList.remove('scrolled');
      }
    }
  }
}
