import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-driver',
templateUrl: './driver.component.html',
styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
nearby: boolean;
playing: boolean;
playlist: boolean;
search: boolean;

constructor() {
}

ngOnInit() {
    this.nearby = true;
}

isNearby() {
if(!this.nearby){
this.nearby = true;
this.playing = false;
this.playlist = false;
this.search = false;
} else {
this.nearby = false;
}
}

isPlaying() {
if(!this.playing){
this.nearby = false;
this.playing = true;
this.playlist = false;
this.search = false;
} else {
this.playing = false;
}
}

isPlaylist() {
if(!this.playlist){
this.nearby = false;
this.playing = false;
this.playlist = true;
this.search = false;
} else {
this.playlist = false;
}
}

isSearch() {
if(!this.search){
this.nearby = false;
this.playing = false;
this.playlist = false;
this.search = true;
} else {
this.search = false;
}
}
}