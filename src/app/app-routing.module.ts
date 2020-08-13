import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {HomePageComponent } from "./home-page/home-page.component"
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path : "home" , component : HomePageComponent, loadChildren: ()=> import('./home-page/home-page.module').then(m  =>m.HomePageModule)},
  {path : "auth" , component: AuthComponent, loadChildren: ()=> import('./auth/auth.module').then(m  =>m.AuthModule)},
  {path: '', redirectTo: 'auth', pathMatch: 'full'}
];

const config: ExtraOptions = {
  useHash: false
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }