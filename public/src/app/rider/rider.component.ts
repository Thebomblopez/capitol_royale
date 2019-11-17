import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }
  nearby: boolean;
  playing: boolean;
  playlist: boolean;
  search: boolean;
  
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