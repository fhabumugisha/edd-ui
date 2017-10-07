
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeModule } from './theme/theme.module';
import { ThemeService } from './theme/theme.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'themes', component: ThemeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
