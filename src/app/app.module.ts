import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Angular2ImageGalleryModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
