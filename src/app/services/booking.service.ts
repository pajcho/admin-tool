import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking } from '../models/booking.model';
import { BookingListItem } from '../models/booking-list-item.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';
import { environment } from '../../environments/environment';

const CacheGroups = {
  list: 'booking.list',
  details: (id) => `booking.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = '/api/tmcc/bookings';
  private baseUrlElastic = '/api/v3/tmcc/bookings';
  private useElastic = environment.useElasticSearch.bookings;

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<BookingListItem>> {
    const baseUrl = this.useElastic ? this.baseUrlElastic : this.baseUrl;

    return this.http
      .get<PaginatedResponse<BookingListItem>>(baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<BookingListItem>().adapt(data)));
  }

  getDetails(id: Booking['cartId']): Observable<Booking> {
    const baseUrl = this.useElastic ? this.baseUrlElastic : this.baseUrl;

    return this.http.get<Booking>(`${baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }

  getReferenceTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/reference-types`);
  }

  update(booking: Booking): Observable<Booking> {
    return this.http.patch<Booking>(
      `${this.baseUrl}/update-agent-note/${booking.cartId}`,
      { agentNote: booking.agentNote },
      { context: clearGroups([CacheGroups.list, CacheGroups.details(booking.cartId)]) }
    );
  }
}
