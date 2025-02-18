import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Video } from '../../../interfaces/Video';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  albums: Video[] = [];
  video: Video[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Carica le raccolte (album)
    this.http.get<any[]>('assets/videoCollections.json').subscribe(data => {
      this.albums = data;
    });

    // Carica tutte le immagini (puoi filtrarle in base all'album selezionato)
    this.http.get<any[]>('assets/video.json').subscribe(data => {
      this.video = data;
    });
  }

  // Metodo di esempio per recuperare le immagini associate a un album
  getImagesForAlbum(album: any): any[] {
    return this.video.filter(video => album.imageIds.includes(video.id));
  }
}
