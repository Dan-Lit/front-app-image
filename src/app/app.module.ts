import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowAllComponent,
    UploadImagesComponent
  ],
  imports: [
    Angular2ImageGalleryModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
