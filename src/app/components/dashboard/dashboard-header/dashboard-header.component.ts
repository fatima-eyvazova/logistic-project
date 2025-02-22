import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-dashboard-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  isDarkMode = false;
  dropdownVisible = false;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService
  ) {}
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
    console.log(localStorage.getItem('isLoggedIn'));
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-mode');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
    }
    console.log('Dark mode:', this.isDarkMode ? 'ON' : 'OFF');
  }
}
