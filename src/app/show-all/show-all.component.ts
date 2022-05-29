import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageModel } from '../shared/image.model';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  //yourARRAY = "C:\Users\danie\source\repos\front-app-image\src\assets\img\gallery\data.json";
  //metadataUri = "data:application/octet-stream," + encodeURIComponent(JSON.stringify(this.yourARRAY));

  allImages =
    [
      new ImageModel('/assets/images/test.jpg'),
      new ImageModel('/assets/images/test.jpg'),
      new ImageModel('/assets/images/test.jpg'),

    ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
