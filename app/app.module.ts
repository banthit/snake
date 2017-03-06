import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { HomeService } from './services/home.service';

import { routing }  from './app.routing';

@NgModule({
  imports:
  [
    BrowserModule,
    routing
  ], //other modules the app depends on
  declarations:
  [
    AppComponent,
    HomeComponent
  ], // declare all derectives and components
  providers:[
    HomeService
  ],
  bootstrap :
  [
    AppComponent
  ] // root component to bootstarp
})
export class AppModule { }
