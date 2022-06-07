import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ImageResponse } from '../shared/image-response.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  urlPath: string = 'https://localhost:7194';
  imageID: string = 'dcada2fb-7d0d-416e-94a4-75fbc59b2f41';

  constructor(private client: HttpClient) {} 

  public getAllImages() {
    return this.client.get<ImageResponse>(this.urlPath + '/api/images/getall');
  }

  public getImage() {
    return this.client.get<string>(this.urlPath + '/api/images/' + this.imageID);
  }

  public uploadImage(formData: FormData): Observable<Object> {
    console.log(this.urlPath);
    return this.client.put(this.urlPath + '/api/images/several', formData, {
      observe: 'response',
    });
  }

  public getAllImagesURL() {
    return this.client.get(this.urlPath + '/api/Images/GetAll/url');
  }

}
