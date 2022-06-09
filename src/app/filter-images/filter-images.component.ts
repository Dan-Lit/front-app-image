import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-filter-images',
  templateUrl: './filter-images.component.html',
  styleUrls: ['./filter-images.component.css']
})
export class FilterImagesComponent implements OnInit {
  tagName: any;
  data: any = [];
  endpoint = 'assets/database/';

  constructor(private imageService: ConfigService) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {

    this.imageService.GetAllImageTagConfig()
      .subscribe(data => {
        this.data = data;
        this.data = this.data.filter((x: { tagId: string; }) => x.tagId === this.tagName);
        console.log(this.data);

      });
    
  }
}
