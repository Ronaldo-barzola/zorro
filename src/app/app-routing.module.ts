import {NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';



const routes: Routes = [
  // {
  //   path: "", component: MenuComponent
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
