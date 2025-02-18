import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SquadreService {
  private jsonUrl = 'assets/squadre.json';

  constructor(private http: HttpClient) { }

  getSquadre(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
