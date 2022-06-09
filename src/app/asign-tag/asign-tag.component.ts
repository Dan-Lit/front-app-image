import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-asign-tag',
  templateUrl: './asign-tag.component.html',
  styleUrls: ['./asign-tag.component.css']
})
export class AsignTagComponent implements OnInit {

  imageId: any;
  nameTag: any;

  constructor(private imageService: ConfigService) {}

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    this.imageService.AssignTag(this.imageId, this.nameTag)
      .subscribe(data => {
        console.log(this.imageId);
        console.log(this.nameTag);
        console.log(data);
      })
  }

}
