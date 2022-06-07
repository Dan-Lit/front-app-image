import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  data: any = []
  endpoint = 'assets/database/'

  constructor(private imageService: ConfigService) { }

  ngOnInit(): void {
    this.imageService.getAllImagesURL()
      .subscribe((res) => {
        this.data = res
        console.log(this.data)
      })
  }
}
