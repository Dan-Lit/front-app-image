import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { TestComponent } from './test/test.component';
import { AsignTagComponent } from './asign-tag/asign-tag.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { FilterImagesComponent } from './filter-images/filter-images.component';
import { UntaggedComponent } from './untagged/untagged.component';


import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ChipComponent } from './shared/chip/chip.component';
import { HomeComponent } from './home/home.component';
import { TagPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowAllComponent,
    UploadImagesComponent,
    TestComponent,
    AsignTagComponent,
    CreateTagComponent,
    FilterImagesComponent,
    UntaggedComponent,
    ChipComponent,
    HomeComponent,
    TagPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
