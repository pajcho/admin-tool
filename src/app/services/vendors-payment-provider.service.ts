import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendorsPaymentProvider } from '../models/vendors-payment-provider.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'vendorsPaymentProvider.list',
  details: (id) => `vendorsPaymentProvider.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class VendorsPaymentProviderService {
  private baseUrl = '/api/tmcc/products/vendors/payment-providers';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<VendorsPaymentProvider>> {
    return this.http
      .get<PaginatedResponse<VendorsPaymentProvider>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<VendorsPaymentProvider>().adapt(data)));
  }

  toggleStatus(item: VendorsPaymentProvider): Observable<VendorsPaymentProvider> {
    return this.saveDetails({ ...item, active: !item.active });
  }

  saveDetails(item: VendorsPaymentProvider): Observable<VendorsPaymentProvider> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing vendor payment provider
    if (item.id) {
      const { id, ...withoutId } = item;
      groupsToClear.push(CacheGroups.details(id));

      return this.http.put<VendorsPaymentProvider>(`${this.baseUrl}/${id}`, withoutId, {
        context: clearGroups(groupsToClear),
      });
    }

    // Create new vendor payment provider
    return this.http.post<VendorsPaymentProvider>(this.baseUrl, item, { context: clearGroups(groupsToClear) });
  }

  getById(id: VendorsPaymentProvider['id']): Observable<VendorsPaymentProvider> {
    return this.http.get<VendorsPaymentProvider>(`${this.baseUrl}/${id}`, {
      context: cacheGroup(CacheGroups.details(id)),
    });
  }
}
