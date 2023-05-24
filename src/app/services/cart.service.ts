import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { cacheGroup } from '../interceptors/cache.interceptor';

const CacheGroups = {
  details: (id) => `cart.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = '/api/tmcc/carts';

  constructor(private http: HttpClient) {}

  getDetails(id: Cart['id']): Observable<Cart> {
    return this.http.get<Cart>(`${this.baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }
}
