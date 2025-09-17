import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroments';

export interface Producto {
  id?: number;
  name: string;
  price: number;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private base = `${environment.apiBase}/api/products`;

  constructor(private http: HttpClient) { }

  getAll(params?: { search?: string }): Observable<Producto[]> {
    let httpParams = new HttpParams();
    if (params?.search) httpParams = httpParams.set('name', params.search);
    return this.http.get<Producto[]>(`${this.base}/`, { params: httpParams });
  }

  get(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.base}/${id}/`);
  }

  create(data: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.base}/`, data);
  }

  update(id: number, data: Partial<Producto>): Observable<Producto> {
    return this.http.put<Producto>(`${this.base}/${id}/`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}/`);
  }
}
