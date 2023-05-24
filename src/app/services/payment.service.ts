import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentOptions, PaymentOptionsResponse } from '../models/payment-options.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private baseUrl = '/api/tmcc/customers';

  constructor(private http: HttpClient) {}

  getPaymentOptions(customerId: string): Observable<PaymentOptions> {
    return this.http
      .get<PaymentOptionsResponse>(`${this.baseUrl}/${customerId}/payment-options`)
      .pipe(map((data) => ({ billingProfiles: data.billings, lodgeCards: data.lodgeCards })));
  }
}
