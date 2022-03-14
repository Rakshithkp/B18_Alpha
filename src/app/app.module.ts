import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BookComponent} from './components/book/book.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ErrorInterceptor } from './interceptor/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor , multi:true},
              {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptor , multi:true},
              {provide:HTTP_INTERCEPTORS, useClass:HeaderInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
