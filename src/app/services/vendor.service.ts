import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vendor } from '../models/vendor.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'vendor.list',
};

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private baseUrl = '/api/tmcc/products/vendors';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<Vendor>> {
    return this.http
      .get<PaginatedResponse<Vendor>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<Vendor>().adapt(data)));
  }

  toggleStatus(vendor: Vendor): Observable<Vendor> {
    return this.saveDetails({ ...vendor, active: !vendor.active });
  }

  saveDetails(vendor: Vendor): Observable<Vendor> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing vendor
    if (vendor.id) {
      const { id, ...withoutId } = vendor;
      return this.http.put<Vendor>(`${this.baseUrl}/${id}`, withoutId, { context: clearGroups(groupsToClear) });
    }

    // Create new vendor
    return this.http.post<Vendor>(this.baseUrl, vendor, { context: clearGroups(groupsToClear) });
  }

  delete(vendor: Vendor): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${vendor.id}`, { context: clearGroups([CacheGroups.list]) });
  }
}
