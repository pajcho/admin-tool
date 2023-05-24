import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyUser } from '../models/company-user.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'company-user.list',
  details: (id) => `company-user.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class CompanyUserService {
  private baseUrl = '/api/tmcc/company-users';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<CompanyUser>> {
    return this.http
      .get<PaginatedResponse<CompanyUser>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<CompanyUser>().adapt(data)));
  }

  getDetails(id: CompanyUser['id']): Observable<CompanyUser> {
    return this.http.get<CompanyUser>(`${this.baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }

  saveDetails(user: CompanyUser): Observable<CompanyUser> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing company user
    if (user.id) {
      groupsToClear.push(CacheGroups.details(user.id));

      return this.http.put<CompanyUser>(`${this.baseUrl}/${user.id}`, user, { context: clearGroups(groupsToClear) });
    }

    // Create new company user
    return this.http.post<CompanyUser>(this.baseUrl, user, { context: clearGroups(groupsToClear) });
  }
}
