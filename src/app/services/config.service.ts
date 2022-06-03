import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  urlPath = 'https://localhost:7194';

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    })
  };

  constructor(private client: HttpClient) {} 

  getAllImages(): Observable<Blob> {
    //var images =
    return this.client.get(this.urlPath + '/api/images/getall', { responseType: 'blob' });
  }

  //public uploadImage(image: File): Observable<Object> {
  //  const formData = new FormData();

  //  formData.append('image', image);

  //  return this.client.put('/api/images', image);
  //}


  public uploadImage(formData: FormData): Observable<Object> {
    console.log(this.urlPath);
    return this.client.put(this.urlPath + '/api/images', formData, {
      observe: 'response',
    });
  }
 

}
