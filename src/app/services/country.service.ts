import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = '/api/details/locations/countries';

  constructor(private http: HttpClient) {}

  list(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl).pipe(
      map((data) => {
        return data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      })
    );
  }
}
