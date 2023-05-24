import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ForgotPasswordResponse, ValidatePasswordTokenResponse } from '../reducers/common.interfaces';
import { ApiCache } from '../services/api-cache.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '/api/tmcc';

  constructor(private http: HttpClient, private requestCache: ApiCache) {}

  login(data: { username: string; password: string }): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}/authenticate`, { username: data.username, password: data.password })
      .pipe(
        tap((user) => {
          if (user && user.token) this.setUser(user, user.token);
        })
      );
  }

  forgotPassword(email: string): Observable<ForgotPasswordResponse> {
    return this.http.post(`${this.baseUrl}/users/forgot-password`, { email }).pipe(map(() => ({ email })));
  }

  activateNewPassword(token: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/activate-new-password`, { token, password });
  }

  validatePasswordToken(token: string): Observable<boolean> {
    return this.http
      .get(`${this.baseUrl}/users/activate-new-password/${token}`)
      .pipe(map((response: ValidatePasswordTokenResponse) => response.valid));
  }

  setNewPassword(token: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users/set-new-password`, { token, password });
  }

  validateSetPasswordToken(token: string): Observable<boolean> {
    return this.http
      .get(`${this.baseUrl}/users/set-new-password/${token}`)
      .pipe(map((response: ValidatePasswordTokenResponse) => response.valid));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('currentUser')) || {};
  }

  setUser(user: User, token: User['token']): void {
    localStorage.setItem('currentUser', JSON.stringify({ ...user, token }));
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('currentUser');
    this.requestCache.clearAll();

    return of(true);
  }
}
