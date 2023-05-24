import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FlightPNRConfirmation,
  FlightPNRConfirmationRequest,
  FlightPNRValidation,
  FlightPNRValidationRequest,
} from '../models/pnr.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PNRService {
  /**
   * TODO: Talk with BE to add some sort of prefix here to indicate it is a secure API (ie. /api)
   *  It was removed because it is using different tokens from Portal, but we have to get it back somehow
   *  because of this we have to mark all DFS related endpoints as secure in order for token to be sent.
   *  For more info see {@link AddHeaderInterceptor#setHeaders}
   */
  private baseUrl = '/v1/tmcc/agent-assisted';
  private baseUrlSecure = '/api/tmcc/agent-assisted';

  constructor(private http: HttpClient) {}

  validateFlightPNR(params: FlightPNRValidationRequest): Observable<FlightPNRValidation> {
    return this.http.post<FlightPNRValidation>(`${environment.api.dfs}${this.baseUrl}/validate-booking`, params);
  }

  confirmFlightPNR(params: FlightPNRConfirmationRequest): Observable<FlightPNRConfirmation> {
    return this.http.post<FlightPNRConfirmation>(`${this.baseUrlSecure}/confirmation`, params);
  }
}
