import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserCardComponent } from './views/hom/user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCardComponent,
  ],

  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    
     
    ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
