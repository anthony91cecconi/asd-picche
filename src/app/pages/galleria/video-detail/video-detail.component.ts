import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from '../../../interfaces/Video';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  videos: Video[] = [];
  selectedVideo?: Video | undefined|null;

  constructor(private route: ActivatedRoute, private videoService: VideoService) {}

  ngOnInit(): void {
    const videoId = Number(this.route.snapshot.paramMap.get('id'));

    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
      this.selectedVideo = videos.find(video => video.id === videoId) || undefined; // Aggiunto fallback a undefined
    });
  }


  selectVideo(video: Video): void {
    this.selectedVideo = video;
  }

  generateThumbnail(video: Video): string {
    return video.thumbnail || 'https://via.placeholder.com/100x56';  // Fallback se non presente
  }
}
