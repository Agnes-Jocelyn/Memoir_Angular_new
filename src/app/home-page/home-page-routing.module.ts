import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardPostComponent} from './card-post/card-post.component'
import {YourPostComponent} from './your-post/your-post.component'


const routes: Routes = [
  {path : "" , component : CardPostComponent},
  {path : "yourPost" , component: YourPostComponent },
  {path : "posts", component : CardPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
