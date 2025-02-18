import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foto',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.scss'
})
export class FotoComponent {
  albums: any[] = [];
  photos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Carica le raccolte (album)
    this.http.get<any[]>('assets/photoCollections.json').subscribe(data => {
      this.albums = data;
    });

    // Carica tutte le immagini (puoi filtrarle in base all'album selezionato)
    this.http.get<any[]>('assets/photos.json').subscribe(data => {
      this.photos = data;
    });
  }

  // Metodo di esempio per recuperare le immagini associate a un album
  getImagesForAlbum(album: any): any[] {
    return this.photos.filter(photo => album.imageIds.includes(photo.id));
  }
}
