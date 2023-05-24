import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SystemMessage } from '../models/system-message.model';
import { cacheGroup, clearGroups } from '../interceptors/cache.interceptor';
import { PaginatedData, PaginatedDataAdapter, PaginatedResponse } from '../models/pagination.model';

const CacheGroups = {
  list: 'system-message.list',
  details: (id) => `system-message.details.${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class SystemMessageService {
  private baseUrl = '/api/tmcc/system-messages';

  constructor(private http: HttpClient) {}

  list(params): Observable<PaginatedData<SystemMessage>> {
    return this.http
      .get<PaginatedResponse<SystemMessage>>(this.baseUrl, { params, context: cacheGroup(CacheGroups.list) })
      .pipe(map((data) => new PaginatedDataAdapter<SystemMessage>().adapt(data)));
  }

  getDetails(id: SystemMessage['id']): Observable<SystemMessage> {
    return this.http.get<SystemMessage>(`${this.baseUrl}/${id}`, { context: cacheGroup(CacheGroups.details(id)) });
  }

  saveDetails(systemMessage: SystemMessage): Observable<SystemMessage> {
    const groupsToClear = [CacheGroups.list];

    // Edit existing system message
    if (systemMessage.id) {
      groupsToClear.push(CacheGroups.details(systemMessage.id));

      return this.http.patch<SystemMessage>(`${this.baseUrl}/${systemMessage.id}`, systemMessage, {
        context: clearGroups(groupsToClear),
      });
    }

    // Create new systemMessage
    return this.http.post<SystemMessage>(this.baseUrl, systemMessage, { context: clearGroups(groupsToClear) });
  }

  delete(systemMessage: SystemMessage): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${systemMessage.id}`, {
      context: clearGroups([CacheGroups.list, CacheGroups.details(systemMessage.id)]),
    });
  }
}
