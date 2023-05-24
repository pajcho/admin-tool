import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { CompanyUser } from '../models/company-user.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'user.list',
  details: (id: string) => `user.details.${id}`,
  token: (username: string) => `user.token.${username}`,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = '/api/tmcc/users';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<User>> {
    return this.http
      .get<PaginatedResponse<User>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<User>().adapt(data)));
  }

  getById(id: User['id']): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }

  saveDetails(user: User): Observable<User> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing user
    if (user.id) {
      groupsToClear.push(CacheGroups.details(user.id), CacheGroups.token(user.username));

      const { id, ...withoutId } = user;
      return this.http.put<User>(`${this.baseUrl}/${id}`, withoutId, { context: clearGroups(groupsToClear) });
    }

    // Create new user
    return this.http.post<User>(this.baseUrl, user, { context: clearGroups(groupsToClear) });
  }

  changeUserPassword(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.baseUrl}/${user.id}/change-password`,
      { newPassword: user.password },
      { context: clearGroups([CacheGroups.details(user.id), CacheGroups.token(user.username)]) }
    );
  }

  getOverrideToken(username: CompanyUser['username']): Observable<Partial<{ token: string }>> {
    return this.http.get<Partial<{ token: string }>>(`${this.baseUrl}-override`, {
      params: { username },
      context: cacheGroup(CacheGroups.token(username)),
    });
  }
}
