import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PNRValidationTraveler } from '../models/pnr.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = '/api/tmcc/corporations';

  constructor(private http: HttpClient) {}

  resolveFromTravellers(companyId: string, travellers: PNRValidationTraveler[]): Observable<Employee[]> {
    return this.http.post<Employee[]>(`${this.baseUrl}/${companyId}/resolve-employees`, travellers);
  }
}
