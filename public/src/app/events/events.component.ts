import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-events',
templateUrl: './events.component.html',
styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
constructor() { }

ngOnInit() {
}

}
