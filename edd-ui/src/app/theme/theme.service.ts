import { Injectable } from '@angular/core';
import {Theme} from './theme';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThemeService {

  private themeUrl = '/api/themes';

  constructor(private http: Http) { }


  getThemes(): Promise<Theme[]> {
    return this.http.get(this.themeUrl).toPromise().then(response => response.json() as Theme[]).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error);
    return Promise.reject(error.message || error);

  }


}
