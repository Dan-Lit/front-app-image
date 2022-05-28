import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../shared/image.model';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

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
