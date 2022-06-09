import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent {

  tagName: any;
  constructor(private imageService: ConfigService) { }

  submit(form: NgForm) {
    this.imageService.CreateTag(this.tagName)
      .subscribe(data => {
        console.log(this.tagName);
        console.log(data);
      })

  }

}
