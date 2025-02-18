import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Video } from '../../interfaces/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoCollectionUrl = 'assets/videoCollections.json';
  private videoUrl = 'assets/video.json';

  constructor(private http: HttpClient) {}

  // Recupera tutte le raccolte di video (album)
  getVideoCollections(): Observable<VideoCollection[]> {
    return this.http.get<VideoCollection[]>(this.videoCollectionUrl).pipe(
      catchError(error => {
        console.error('Error fetching video collections:', error);
        return of([]);  // In caso di errore, restituisce un array vuoto
      })
    );
  }

  // Recupera tutti i video
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videoUrl).pipe(
      catchError(error => {
        console.error('Error fetching videos:', error);
        return of([]);  // In caso di errore, restituisce un array vuoto
      })
    );
  }

  // Recupera un video specifico per ID
  getVideoById(id: number): Observable<Video | undefined> {
    return this.getVideos().pipe(
      map(videos => videos.find(video => video.id === id))
    );
  }
}


interface VideoCollection {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  videoIds: number[];
}
