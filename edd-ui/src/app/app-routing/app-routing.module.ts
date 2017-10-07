import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';

const routes: Routes = [
  { path: 'themes', component: ThemeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] ,
  declarations: []
})
export class AppRoutingModule { }
