import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { filter, firstValueFrom } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-filter-images',
  templateUrl: './filter-images.component.html',
  styleUrls: ['./filter-images.component.css']
})
export class FilterImagesComponent implements OnInit {
  tagName: any;
  data: any = [];
  selectedTags!: string[];
  retrieved: boolean = false;
  endpoint = 'assets/database/';

  chipsControlFilter = new FormControl();
  chipsControlValue$ = this.chipsControlFilter.valueChanges;

  constructor(private imageService: ConfigService) { }

  ngOnInit(): void {

  }

  async submit() {

    this.data = await firstValueFrom(this.imageService.GetAllImageTagConfig());
    this.selectedTags = ['test', 'all']
    console.log(this.data);

    this.retrieved = true;
  }
}
