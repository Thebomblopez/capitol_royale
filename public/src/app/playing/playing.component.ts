import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-playing',
templateUrl: './playing.component.html',
styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
constructor() { }

ngOnInit() {
}

}