import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CardPostComponent } from './card-post/card-post.component';
import { YourPostComponent } from './your-post/your-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomePageComponent, CardPostComponent, YourPostComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatCardModule,
    FormsModule
    // RouterModule,
  ]
})
export class HomePageModule { }
