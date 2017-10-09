import { Injectable } from '@angular/core';
import {Theme} from './theme';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThemeService {

  private themeUrl = '/api/themes';

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type' : 'application/json'});

  getThemes(): Promise<Theme[]> {
    return this.http.get(this.themeUrl).toPromise().then(response => response.json() as Theme[]).catch(this.handleError);

  }

  getTheme(id: number): Promise<Theme> {
    const url = `${this.themeUrl}/getTheme/${id}`;
    return this.http.get(url).toPromise().then(response => response.json() as Theme).catch(this.handleError);
  }

  createTheme(theme: Theme): Promise<Theme> {
    return this.http.post(this.themeUrl + '/createTheme', JSON.stringify(theme), {headers : this.headers}).toPromise()
                  .then(response => response.json() as Theme).catch(this.handleError);
  }

    updateTheme(theme: Theme): Promise<Theme> {
    return this.http.post(this.themeUrl + '/updateTheme', JSON.stringify(theme), {headers : this.headers}).toPromise()
                  .then(() => theme).catch(this.handleError);
  }

   deleteTheme(theme: Theme): Promise<Theme> {
    const url = `${this.themeUrl}/deleteTheme/${theme.id}`;
    return this.http.get(url, { headers: this.headers }).toPromise().then(() => null).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error);
    return Promise.reject(error.message || error);

  }


}
