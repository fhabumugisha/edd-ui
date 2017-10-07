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
  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.getThemes().then(themes => this.themes = themes);
  }

}
