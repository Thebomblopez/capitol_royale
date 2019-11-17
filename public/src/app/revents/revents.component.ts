import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revents',
  templateUrl: './revents.component.html',
  styleUrls: ['./revents.component.css']
})
export class ReventsComponent implements OnInit {

  newQuery = {
    search: "",
  }

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getEvent()
  }


  getEvent() {
    let observable = this._httpService.searchEvents();
    observable.subscribe((data: any) => {
     console.log("Data", data);
    })
  }

}
