import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rsearch',
  templateUrl: './rsearch.component.html',
  styleUrls: ['./rsearch.component.css']
})

export class RsearchComponent implements OnInit {

  
  errors = null
  newQuery = {
    search: "",
  }

  constructor(private _httpService: HttpService, private _router: Router) { }
  
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type; charset=utf-8',
    'x-api-key' : 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh'
  }
  
  requestOptions = {                               
    headers: new Headers(this.headerDict), 
  };
  
  ngOnInit() {
  }

  handleSearch() {
  console.log(this.newQuery.search)
  let query = {
    q : this.newQuery
  }
  let observable = this._httpService.searchSongs(this.newQuery);
  observable.subscribe((data: any) => {
   console.log("Data", data);
  })
}

}
