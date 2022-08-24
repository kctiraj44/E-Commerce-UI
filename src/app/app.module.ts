import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {  MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FootbarComponent } from './component/footbar/footbar.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
    
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
