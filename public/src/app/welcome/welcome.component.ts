import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private _socket: Socket,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._socket.emit("getNumber");
  }

}
