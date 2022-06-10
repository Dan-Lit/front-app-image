import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignTagComponent } from './asign-tag/asign-tag.component';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { FilterImagesComponent } from './filter-images/filter-images.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { TestComponent } from './test/test.component';
import { UntaggedComponent } from './untagged/untagged.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';

const routes: Routes = [
  {
    path: 'show-all', component: ShowAllComponent, children: [{
      path: 'edit/:id', component: AsignTagComponent
    }]
  },
  { path: 'asign-tag', component: AsignTagComponent },
  { path: 'upload', component: UploadImagesComponent },
  { path: 'test', component: TestComponent },
  { path: 'create-tag', component: CreateTagComponent },
  { path: 'filter', component: FilterImagesComponent },
  {
    path: 'untagged', component: UntaggedComponent, children: [{
      path: 'edit/:id', component: AsignTagComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
