import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              this.el.nativeElement.classList.contains('contact-form-container')
            ) {
              this.renderer.addClass(this.el.nativeElement, 'animate-left');
            } else if (
              this.el.nativeElement.classList.contains('contact-info-container')
            ) {
              this.renderer.addClass(this.el.nativeElement, 'animate-right');
            } else {
              this.renderer.addClass(this.el.nativeElement, 'animate');
            }
          } else {
            if (
              this.el.nativeElement.classList.contains('contact-form-container')
            ) {
              this.renderer.removeClass(this.el.nativeElement, 'animate-left');
            } else if (
              this.el.nativeElement.classList.contains('contact-info-container')
            ) {
              this.renderer.removeClass(this.el.nativeElement, 'animate-right');
            } else {
              this.renderer.removeClass(this.el.nativeElement, 'animate');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    this.renderer.addClass(this.el.nativeElement, 'hidden');
    observer.observe(this.el.nativeElement);
  }
}
