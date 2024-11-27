import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private API_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // Método para obtener los clientes
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/clientes`);
  }
  // Método para Guardar los clientes
  postClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/clientes`, client);
  }
  // Método para actualizar un cliente
  putClient(id: string, client: any): Observable<any> {
    return this.http.put(`${this.API_URL}/clientes/${id}`, client);
  }
}
