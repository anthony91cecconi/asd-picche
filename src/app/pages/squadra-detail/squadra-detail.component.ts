import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SquadreService } from '../squadre/squadre.service';
import { Squadra } from '../../interfaces/squadre';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-squadra-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squadra-detail.component.html',
  styleUrl: './squadra-detail.component.scss'
})
export class SquadraDetailComponent implements OnInit {
  squadra: Squadra | undefined;

  // Carousel
  carouselImages: string[] = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3'
  ];
  currentImageIndex = 0;

  // Calendario
  monthNames: string[] = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  daysInMonth: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private squadreService: SquadreService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.squadreService.getSquadre().subscribe(data => {
      // Assumiamo che "data" sia un array di squadre
      this.squadra = data.find(s => s.id === id);
    });
    this.updateDaysInMonth();
  }

  // Funzioni del Carousel
  prevImage(): void {
    this.currentImageIndex =
      this.currentImageIndex === 0 ? this.carouselImages.length - 1 : this.currentImageIndex - 1;
  }

  nextImage(): void {
    this.currentImageIndex =
      this.currentImageIndex === this.carouselImages.length - 1 ? 0 : this.currentImageIndex + 1;
  }

  // Funzioni del Calendario
  updateDaysInMonth(): void {
    const days = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateDaysInMonth();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateDaysInMonth();
  }
}
