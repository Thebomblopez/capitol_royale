import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  playlist = {
    id : String
  }
  
  constructor(
    private _socket: Socket,
    private _router: Router,
    private _http: HttpService,

  ) { }

  ngOnInit() {
    this._socket.emit("getId");
    this._socket.on('hereBro', (data) => {
      console.log("Socket ID: ", data);
      this.playlist.id = data;
    })
  }

  // Create Playlist and send user to it
  createRoom() {
    

    this._http.createPlaylist(this.playlist);
    this._router.navigate(['driver',this.playlist.id,'playlist'])
  };

}
