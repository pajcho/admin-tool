import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingChannelsResponse, CheckoutOptions, CheckoutOptionsResponse } from '../models/checkout-options.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private baseUrl = `${environment.api.ams}/api`;

  constructor(private http: HttpClient) {}

  getCheckoutOptions(companyId: string): Observable<CheckoutOptions> {
    return this.http.get<CheckoutOptionsResponse>(`${this.baseUrl}/reference-fields/${companyId}/checkout-options`);
  }

  getBookingChannels(): Observable<BookingChannelsResponse> {
    return this.http.get<BookingChannelsResponse>(`${this.baseUrl}/information-fields/get-booking-channels`);
  }
}
