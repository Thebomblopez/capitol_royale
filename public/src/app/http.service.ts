import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createPlaylist(playlist) {
    return this._http.post('/api/playlist', playlist);
  }

  getPlaylist(id) {
    return this._http.get('/api/playlist/' + id);
  }

  updatePlaylist(playlist) {
    return this._http.put(`/api/playlist/${playlist.id}`, playlist);
  }

  deletePlaylist(id) {
    return this._http.delete('/api/playlist/' + id);
    
  }

  searchSongs(query) {
    console.log(query)
    return this._http.get('/artist/search/', query)
  }

  searchEvents() {
    return this._http.get('/artist/events/')
  }

}
