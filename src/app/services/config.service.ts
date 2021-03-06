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

  constructor(private client: HttpClient) {} 

  public uploadImage(formData: FormData): Observable<Object> {
    console.log(this.urlPath);
    return this.client.put(this.urlPath + '/api/images', formData, {
      observe: 'response',
    });
  }

  public getAllImagesURL() {
    return this.client.get<ImageModel>(this.urlPath + '/api/Images/GetAll/url');
  }

  public AssignTag(imageId: string, tagName: string) {
    return this.client.get(this.urlPath + '/api/tag/' + imageId + '/' + tagName, {
      observe: 'response'
    });
  }

  public GetAllTags() {
    return this.client.get<string[]>(this.urlPath + '/api/tag/all');
  }

  public GetAllImageTagConfig() {
    return this.client.get <ImageTagConfig>(this.urlPath + '/api/tag/imagetagconfig');
  }

  public CreateTag(tagName: string) {
    console.log((this.urlPath + '/api/tag/' + tagName));
    return this.client.get(this.urlPath + '/api/tag/' + tagName);
  }

  public GetUntaggedImages() {
    return this.client.get(this.urlPath + 'api/images/untagged');
  }

}

export interface ImageModel {
  ImageId: string,
  ImageUrl: string,
  Tagged: boolean,
  Processed: boolean,
  UserId: number,
  ImageTagConfig: ImageTagConfig[];
}

export interface Tag {
  tagId: string;
  imagetagconfig: any[];
}

export interface ImageTagConfig {
  ImageId: string,
  TagId: string
}
