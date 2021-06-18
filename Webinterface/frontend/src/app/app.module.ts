import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HonsehusComponent } from './honsehus/honsehus.component';
import { DrivhusComponent } from './drivhus/drivhus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    DashboardComponent,
    HonsehusComponent,
    DrivhusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
