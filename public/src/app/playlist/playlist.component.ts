import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist = {};

  constructor(
    private _activeRoute: ActivatedRoute,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._activeRoute.params
      .subscribe((params: Params ) => {
        console.log(params);
        
        // Getting playlist from DB by id/room name
        this._httpService.getPlaylist(params.id)
          .subscribe(data => {
            console.log('Should be a playlist: ',data);

          })
      })
  }

}
