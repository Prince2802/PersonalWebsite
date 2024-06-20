import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public changeTheme(): void {
    if (localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }

  public setThemeSettings(): void {
    localStorage.setItem('theme', 'light');
    this.changeTheme();
  }

  public isDarkTheme(): boolean {
    return localStorage.getItem('theme') === 'dark';
  }
}
