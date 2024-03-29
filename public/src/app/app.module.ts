import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Http Service
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';
import { EventsComponent } from './events/events.component';
import { PlayingComponent } from './playing/playing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { RsearchComponent } from './rsearch/rsearch.component';
import { ReventsComponent } from './revents/revents.component';
import { RplayingComponent } from './rplaying/rplaying.component';
import { RplaylistComponent } from './rplaylist/rplaylist.component';

// Socket Imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config : SocketIoConfig = { url: 'http://localhost:3333', options: {}};

import { NgbModule} from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    RiderComponent,
    EventsComponent,
    PlayingComponent,
    PlaylistComponent,
    SearchComponent,
    WelcomeComponent,
    CreateComponent,
    JoinComponent,
    RsearchComponent,
    ReventsComponent,
    RplayingComponent,
    RplaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    NgbModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
