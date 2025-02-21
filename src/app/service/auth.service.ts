import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );
    return !!user;
  }

  isLoggedIn(): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.length > 0;
  }

  logout(): void {
    localStorage.removeItem('users');
  }
}
