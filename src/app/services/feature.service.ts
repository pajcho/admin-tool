import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feature } from '../models/feature.model';
import { ApiResponse } from '../global/interfaces/response.interface';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';

const CacheGroups = {
  list: 'feature.list',
};

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private baseUrl = '/api/tmcc/features';

  constructor(private http: HttpClient) {}

  list(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.baseUrl, { context: cacheGroup(CacheGroups.list) });
  }

  toggleStatus(feature: Feature): Observable<Feature> {
    return this.http
      .patch<ApiResponse>(
        `${this.baseUrl}/${feature.id}`,
        { enable: !feature.enabled },
        { context: clearGroups([CacheGroups.list]) }
      )
      .pipe(
        // Since we are not getting feature object as a response
        // we have to do the validation and return it instead
        map((response) => {
          if (response.valid) {
            return { ...feature, enabled: !feature.enabled };
          }

          throw new Error('Error updating a feature.');
        })
      );
  }
}
