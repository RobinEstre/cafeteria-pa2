import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroments';

export interface OrderItemPayload {
    product: number; // id del producto
    qty: number;
}

export interface OrderPayload {
    id?: number;
    customer: string;
    created_at?: string;
    items: OrderItemPayload[];
}

@Injectable({ providedIn: 'root' })
export class OrdenService {
    private base = `${environment.apiBase}/api/orders`;

    constructor(private http: HttpClient) { }

    list(): Observable<OrderPayload[]> {
        return this.http.get<OrderPayload[]>(`${this.base}/`);
    }

    create(payload: OrderPayload): Observable<OrderPayload> {
        return this.http.post<OrderPayload>(`${this.base}/`, payload);
    }
}
