import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revents',
  templateUrl: './revents.component.html',
  styleUrls: ['./revents.component.css']
})
export class ReventsComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  newQuery = {
    search: "",
  }

  artist = {
    image : String
  }

  events = {
    
  }
  venue : any

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getEvent()
  }

  getEvent() {
    let observable = this._httpService.searchEvents();
    observable.subscribe((data: any) => {
      
     let obj = JSON.parse(data);
     this.showMe(obj)
     })
  }

  showMe(objectz){
    console.log(objectz)
    this.events = objectz
    this.artist.image = objectz[0].artist.thumb_url
  }

}
