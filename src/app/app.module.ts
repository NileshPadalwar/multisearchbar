import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PillComponent } from './pill/pill.component';
import {  NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
