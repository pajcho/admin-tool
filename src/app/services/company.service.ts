import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company, SubscriptionStatus } from '../models/company.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'company.list',
  details: (id) => `company.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = '/api/tmcc/companies';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<Company>> {
    return this.http
      .get<PaginatedResponse<Company>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<Company>().adapt(data)));
  }

  getDetails(id: Company['id']): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }

  saveDetails(company: Company): Observable<Company> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing company
    if (company.id) {
      groupsToClear.push(CacheGroups.details(company.id));

      return this.http.put<Company>(`${this.baseUrl}/${company.id}`, company, { context: clearGroups(groupsToClear) });
    }

    // Create new company
    return this.http.post<Company>(this.baseUrl, company, { context: clearGroups(groupsToClear) });
  }

  delete(company: Company): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${company.id}`, {
      context: clearGroups([CacheGroups.list, CacheGroups.details(company.id)]),
    });
  }

  toggleSubscriptionStatus(company: Company): Observable<Company> {
    const action = company.subscriptionStatus === SubscriptionStatus.DISABLED ? 'enable' : 'disable';

    return this.http.patch<Company>(
      `${this.baseUrl}/${company.id}/${action}`,
      {},
      { context: clearGroups([CacheGroups.list]) }
    );
  }
}
