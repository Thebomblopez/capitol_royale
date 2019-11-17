import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { DriverComponent } from './driver/driver.component';
import { PlayingComponent } from './playing/playing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { EventsComponent } from './events/events.component';
import { SearchComponent } from './search/search.component';
import { RsearchComponent } from './rsearch/rsearch.component';
import { ReventsComponent } from './revents/revents.component';
import { RplaylistComponent } from './rplaylist/rplaylist.component';
import { RplayingComponent } from './rplaying/rplaying.component';


const routes: Routes = [
  {
    path : '', component: WelcomeComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'join', component: JoinComponent },
    ]
  },
  {
    path : 'driver/:id', component: DriverComponent,
    children: [
      {path: 'driver/:id/playing', component: PlayingComponent},
      {path: 'driver/:id/playlist', component: PlaylistComponent},
      {path: 'driver/:id/:song/events', component: EventsComponent},
      {path: 'driver/:id/search', component: SearchComponent}, 
    ]
  },
  {
    path : 'rider/:id', component: DriverComponent,
    children: [
      {path: 'rider/:id/playing', component: RplayingComponent},
      {path: 'rider/:id/playlist', component: RplaylistComponent},
      {path: 'rider/:id/:song/events', component: ReventsComponent},
      {path: 'rider/:id/search', component: RsearchComponent}, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const routes: Routes = [
  { path : '', component: LandingComponent,
  children: [
    { path: 'login',component: LoginComponent },
    { path: '', component : LoginComponent},
    { path: 'registration',component: RegistrationComponent }
  ] },
  { path : 'home/:id', component: HomeComponent}, 
  { path : 'user/:id', component: UserProfileComponent}, 
  { path : 'event/:eventId/:id', component: EventDetailsComponent},
  { path : 'create/:id', component: CreateEventComponent},  
];

*/
