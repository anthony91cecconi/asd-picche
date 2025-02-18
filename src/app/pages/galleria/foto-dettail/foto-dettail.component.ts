import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../foto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foto-detail',
  standalone:true,
  imports: [
    CommonModule
  ],
  templateUrl: './foto-dettail.component.html',
  styleUrl: './foto-dettail.component.scss'
})
export class FotoDetailComponent implements OnInit {
  album: any;
  images: any[] = [];
  currentIndex: number = 0;

  constructor(private route: ActivatedRoute, private fotoService: FotoService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const albumId = Number(params.get('id'));

      this.fotoService.getAlbums().subscribe(albums => {
        this.album = albums.find(a => a.id === albumId);
        if (this.album) {
          this.fotoService.getImages().subscribe(images => {
            this.images = images.filter(img => this.album.imageIds.includes(img.id));
          });
        }
      });
    });
  }

  prevImage(): void {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage(): void {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  setImage(index: number): void {
    this.currentIndex = index;
  }
}
