import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private API_URL = 'http://localhost:5000/api'; // Cambia si tu backend tiene otra URL base

  constructor(private http: HttpClient) {}

  // Método para obtener los clientes
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/clientes`);
  }
}
