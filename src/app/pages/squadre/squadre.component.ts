import { Component } from '@angular/core';
import { SquadreService } from './squadre.service';
import { RouterModule } from '@angular/router';
import { Squadra } from '../../interfaces/squadre';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-squadre',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './squadre.component.html',
  styleUrl: './squadre.component.scss'
})
export class SquadreComponent {
  squadre: Squadra[] = [];

  constructor(private squadreService: SquadreService) { }

  ngOnInit(): void {
    this.squadreService.getSquadre().subscribe(data => {
      this.squadre = data;
    });
  }
}
