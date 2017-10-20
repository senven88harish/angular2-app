import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ApiComponent } from './api/api.component';
import { FormComponent } from './form/form.component';
import { BasicAnimComponent } from './animation/basic.component';
import { UserService } from "./service/user.service";

import { HighlightDirective } from './directives/highlight.directive'

import { CapitalizePipe } from './pipe/capitalize.pipe'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ApiComponent,
    FormComponent,
    HighlightDirective,
    CapitalizePipe,
    BasicAnimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
