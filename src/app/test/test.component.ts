import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data: any = []
  endpoint = 'assets/database/'

  constructor(private http: HttpClient) { }

  getDataFromMyAPI() {
    const url = 'https://localhost:7194/api/Images/GetAll/url'
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
  }

  ngOnInit(): void {
  }

}
