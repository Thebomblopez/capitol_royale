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
import { RiderComponent } from './rider/rider.component';


const routes: Routes = [
  {
    path : '', component: WelcomeComponent,
    children: [
      {path : '', component: JoinComponent},
      { path: 'create', component: CreateComponent },
      { path: 'join', component: JoinComponent },
    ]
  },
  {
    path : 'driver', component: DriverComponent,
    children: [
      {path: ':id/playing', component: PlayingComponent},
      {path: ':id/playlist', component: PlaylistComponent},
      {path: ':id/:song/events', component: EventsComponent},
      {path: ':id/search', component: SearchComponent}, 
    ]
  },
  {
    path : 'rider', component: RiderComponent,
    children: [
      {path: 'rider/:id',component: RplayingComponent },
      {path: ':id/playing', component: RplayingComponent},
      {path: ':id/playlist', component: RplaylistComponent},
      {path: ':id/:song/events', component: ReventsComponent},
      {path: ':id/search', component: RsearchComponent}, 
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
