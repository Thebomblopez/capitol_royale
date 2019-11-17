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

  newQuery = {
    search: "",
  }

  song1 = {}
  song2 = {}
  song3 = {}
  song4 = {}

  data = false;


  constructor(private _httpService: HttpService, private _router: Router) { }
  
  // headerDict = {
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json',
  //   'Access-Control-Allow-Headers': 'Content-Type; charset=utf-8',
  //   'x-api-key' : 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh'
  // }
  
  // requestOptions = {                               
  //   headers: new Headers(this.headerDict), 
  // };
  
  ngOnInit() {
  }

  handleSearch() {
  console.log(this.newQuery.search)
  let query = {
    q : this.newQuery
  }
  let observable = this._httpService.searchSongs(this.newQuery);
  observable.subscribe((data: any) => {
    this.myMethod(data);
  })

}

myMethod(data){
   this.song1 = 
    {
      "title": "Pop Your Balloon",
      "artist_name": "Beastie Boys",
      "pc_notice_company_name": "Capitol Records, LLC and Beastie Boys",
    };

    this.song2 = 
    {
      "title": "Hard To Handle",
      "artist_name": "Ivy Quainoo",
      "label_name": "The Voice Of Germany"
    };

    this.song3 =
    {
      "title": "Ain't No Sunshine",
      "artist_name": "Mic Donet",
      "pc_notice_company_name": "Universal Music Domestic Pop, a division of Universal Music GmbH",
    }

    this.song4 =
    {
      "title": "Lonely Town",
      "artist_name": "Barry Manilow",
      "pc_notice_company_name": "Verve Label Group, a Division of UMG Recordings, Inc.",
    }

    this.data = true;
  
}

}
