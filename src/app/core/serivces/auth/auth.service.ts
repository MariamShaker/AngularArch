import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Credentials, RegisterData } from '../../models/auth.models';
import { Environment  } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
   private apiUrl = Environment.apiUrl;
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((res: any) => {
        if (res && res.access_token) {
        localStorage.setItem('auth_token', res.access_token);
        // console.log(localStorage.getItem('auth_token'))
      }
 if (res && res.refresh_token) {
        localStorage.setItem('refresh_token', res.refresh_token);
        // console.log(localStorage.getItem('auth_token'))
      }      })
    );
  }

  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

 

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
