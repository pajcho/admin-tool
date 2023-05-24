import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'product.list',
  details: (id) => `product.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = '/api/tmcc/products';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<Product>> {
    return this.http
      .get<PaginatedResponse<Product>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<Product>().adapt(data)));
  }

  toggleStatus(product: Product): Observable<Product> {
    return this.saveDetails({ ...product, active: !product.active });
  }

  saveDetails(product: Product): Observable<Product> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing product
    if (product.id) {
      const { id, ...withoutId } = product;
      groupsToClear.push(CacheGroups.details(id));

      return this.http.put<Product>(`${this.baseUrl}/${id}`, withoutId, { context: clearGroups(groupsToClear) });
    }

    // Create new product
    return this.http.post<Product>(this.baseUrl, product, { context: clearGroups(groupsToClear) });
  }

  getById(id: Product['id']): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }
}
