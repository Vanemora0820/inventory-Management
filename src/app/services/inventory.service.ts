import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://localhost:8080/api'


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  getInventory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/inventory`);
  }

  registerInventory(inventory: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inventory`, inventory);
  }

  deliverInventory(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/inventory/${id}/deliver`, {});
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`); // Asegúrate de que este endpoint esté disponible en tu backend
  }

}
