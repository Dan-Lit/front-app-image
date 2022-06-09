import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-untagged',
  templateUrl: './untagged.component.html',
  styleUrls: ['./untagged.component.css']
})
export class UntaggedComponent implements OnInit {

  data: any = []
  endpoint = 'assets/database/'

  constructor(private imageService: ConfigService) { }

  ngOnInit(): void {
    this.imageService.getAllImagesURL()
      .subscribe((res) => {
        this.data = res;
        this.data = this.data.filter((x: { tagged: boolean; }) => x.tagged === false);
        console.log(this.data)
      })
  }
}

