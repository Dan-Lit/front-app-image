import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignTagComponent } from './asign-tag/asign-tag.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { TestComponent } from './test/test.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

const routes: Routes = [
  { path: 'show-all', component: ShowAllComponent },
  { path: 'asign-tag', component: AsignTagComponent },
  { path: 'upload', component: UploadImagesComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
