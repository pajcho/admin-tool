import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BillingRequest } from '../models/billing-request.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'billing-request.list',
};

@Injectable({ providedIn: 'root' })
export class BillingRequestService {
  private baseUrl = '/api/tmcc/corporations/billing-profiles/requests';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<BillingRequest>> {
    return this.http
      .get<PaginatedResponse<BillingRequest>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<BillingRequest>().adapt(data)));
  }

  update(data: BillingRequest): Observable<BillingRequest> {
    const { id, ...withoutId } = data;

    return this.http.put<BillingRequest>(`${this.baseUrl}/${id}`, withoutId, {
      context: clearGroups([CacheGroups.list]),
    });
  }
}
