import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { TestComponent } from './test/test.component';
import { AsignTagComponent } from './asign-tag/asign-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { FilterImagesComponent } from './filter-images/filter-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowAllComponent,
    UploadImagesComponent,
    TestComponent,
    AsignTagComponent,
    CreateTagComponent,
    FilterImagesComponent
  ],
  imports: [
    Angular2ImageGalleryModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
