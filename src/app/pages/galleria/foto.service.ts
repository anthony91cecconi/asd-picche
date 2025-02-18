import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  private albumsUrl = 'assets/photoCollections.json';
  private imagesUrl = 'assets/photos.json';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.albumsUrl);
  }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.imagesUrl);
  }
}
