import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JapanCulture } from '../../models/japanculture.model';
@Injectable({
  providedIn: 'root'
})
export class CulturaService {
  private apiUrl = 'http://localhost:3000/japan-culture';
  constructor(private http: HttpClient) { }
  getJapanData(): Observable<JapanCulture> {
    return this.http.get<JapanCulture>(this.apiUrl);
  }

}
