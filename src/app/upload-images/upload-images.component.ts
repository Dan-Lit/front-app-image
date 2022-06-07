import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {

  constructor(private imageService: ConfigService) { }

  processFile(imageInput: any) {
    const files: File[] = imageInput.files;

    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('files', f));
    //mismo nombre que el parámetro del método del controlador de la api, importante

    console.log(formData.get('image'));

    this.imageService.uploadImage(formData)
      .subscribe(
        (res) => {console.log('success')},
        (err) => { console.log('error')}
      );
      
  }

}
