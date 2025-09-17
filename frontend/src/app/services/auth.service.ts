import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../enviroments/enviroments';

export interface TokenResponse {
    access: string;
    refresh: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private base = `${environment.apiBase}/api/v1/auth`;

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<TokenResponse> {
        return this.http.post<TokenResponse>(`${this.base}/token/`, { username, password })
            .pipe(tap((res) => this.setToken(res.access)));
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
