import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module' 
import { RouterModule, Router } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { AuthModule } from './auth/auth.module';
import {HttpModule} from '@angular/http'
import {AuthService} from './shared/auth.service'
import { DataService } from './shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AuthModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    MatProgressSpinnerModule,
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
