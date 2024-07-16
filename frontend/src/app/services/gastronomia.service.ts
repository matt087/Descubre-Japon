import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from '../../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class GastronomiaService {
  private apiUrl = 'http://localhost:3000/dishes';

  constructor(private http: HttpClient) { }
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }
}
