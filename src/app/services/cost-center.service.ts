import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelerCostCenterResponse } from '../models/cost-center.model';

@Injectable({
  providedIn: 'root',
})
export class CostCenterService {
  private baseUrl = '/api/tmcc/cost-centers';

  constructor(private http: HttpClient) {}

  loadForTravellers(ids: string[]): Observable<TravelerCostCenterResponse[]> {
    return this.http.get<TravelerCostCenterResponse[]>(`${this.baseUrl}/customers-cost-centers`, {
      params: { customerIds: ids.join(',') },
    });
  }
}
