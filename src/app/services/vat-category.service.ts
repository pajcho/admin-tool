import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VatCategory } from '../models/vat-category.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'vat-category.list',
};

@Injectable({
  providedIn: 'root',
})
export class VatCategoryService {
  private baseUrl = '/api/tmcc/products/vat-categories';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<VatCategory>> {
    return this.http
      .get<PaginatedResponse<VatCategory>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<VatCategory>().adapt(data)));
  }

  toggleStatus(vatCategory: VatCategory): Observable<VatCategory> {
    return this.saveDetails({ ...vatCategory, active: !vatCategory.active });
  }

  saveDetails(vatCategory: VatCategory): Observable<VatCategory> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing vat category
    if (vatCategory.id) {
      const { id, ...withoutId } = vatCategory;
      return this.http.put<VatCategory>(`${this.baseUrl}/${id}`, withoutId, { context: clearGroups(groupsToClear) });
    }

    // Create new vat category
    return this.http.post<VatCategory>(this.baseUrl, vatCategory, { context: clearGroups(groupsToClear) });
  }
}
