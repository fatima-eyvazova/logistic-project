import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  imports: [],
  standalone: true,
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-mode');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
    }
    console.log('Current body classes:', body.classList);
  }
}
