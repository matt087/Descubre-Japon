import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Resultado {
  nombreUsuario: string;
  respuestasCorrectas: number;
}

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private apiUrl = 'http://localhost:3000/guardar-resultado';

  constructor(private http: HttpClient) {}

  guardarResultado(resultado: Resultado): Observable<any> {
    return this.http.post(this.apiUrl, resultado);
  }
}
