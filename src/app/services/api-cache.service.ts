import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ApiCacheEntry {
  url: string;
  group: string;
  response: any;
  lastRead: number;
}

export abstract class ApiCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>, group?: string): void;
  abstract clearAll(): void;
  abstract clearByGroupName(group: string): void;
}

const maxAge = 60 * 60 * 1000; // maximum cache age (60 minutes) - cleared on logout

@Injectable()
export class ApiCacheWithMap implements ApiCache {
  cache = new Map<string, ApiCacheEntry>();

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) return undefined;

    const isExpired = cached.lastRead < Date.now() - maxAge;

    const expired = isExpired ? 'expired ' : '';
    this.log('HIT', `Found ${expired}cached response for "${url}".`);

    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>, group?: string): void {
    const url = req.urlWithParams;
    this.log('MISS', `Caching response from "${url}".`);

    const newEntry = { url, response: response.body, lastRead: Date.now(), group: group || 'default' };
    this.cache.set(url, newEntry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach((cache, key, map) => {
      if (cache.lastRead < expired) map.delete(key);
    });
  }

  clearByGroupName(group: string): void {
    this.cache.forEach((cache, key, map) => {
      if (cache.group === group) map.delete(key);
    });
  }

  clearAll(): void {
    this.cache = new Map<string, ApiCacheEntry>();
  }

  log(action: 'HIT' | 'MISS', text: string): void {
    // Only log if debug mode is enabled
    if (!environment.api.cache.debugMode) return;

    const colors = {
      HIT: 'forestgreen',
      MISS: 'darkorange',
    };

    console.log(
      `%cCache%c %c${action}%c ${text}`,
      `font-weight: normal; font-size: 9px; color: black;
      background: white; border: solid 1px black; padding: 2px 5px;
      border-radius: 3px; text-align: center`,
      ``,
      `font-weight: normal; font-size: 9px; color: white;
      background: ${colors[action]}; padding: 2px 5px;
      border-radius: 3px; text-align: center`,
      ``
    );
  }
}
