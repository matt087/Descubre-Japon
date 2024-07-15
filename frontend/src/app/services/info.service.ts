import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private apiUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) { }
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.apiUrl);
  }
} 
