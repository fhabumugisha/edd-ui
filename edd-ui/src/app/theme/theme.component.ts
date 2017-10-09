import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from './theme.service';
import {Theme} from './theme';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  themes: Theme[];
  newTheme: Theme;
  selectedTheme: Theme;
  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.getThemes().then(themes => this.themes = themes);
    this.newTheme = new Theme();
  }

  createTheme (theme: Theme): void {
    this.themeService.createTheme(theme).then( theme => {
    this.themes.push(theme);
      this.selectedTheme = null;
    });
    }

  deleteTheme(theme: Theme): void {
    this.themeService.deleteTheme(theme).then(() => {
      this.themes = this.themes.filter(h => h !== theme);
      if ( this.selectedTheme === theme) {
        this.selectedTheme = null;
      }
    });
  }

}
