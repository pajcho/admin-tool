import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpContextToken,
  HttpContext,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { ApiCache } from '../services/api-cache.service';
import { environment } from '../../environments/environment';

interface CacheOptions {
  group?: string;
  refresh?: boolean;
  clearGroups?: string[];
}

const CACHE_OPTIONS = new HttpContextToken<CacheOptions>(() => null);

export function cache(options: CacheOptions = {}): HttpContext {
  return new HttpContext().set(CACHE_OPTIONS, options);
}

/**
 * Helper method to only set a cache group without setting up other params
 */
export function cacheGroup(group: CacheOptions['group']): HttpContext {
  return cache({ group });
}

/**
 * Helper method when we only need to clear groups related to this cache
 */
export function clearGroups(groups: CacheOptions['clearGroups']): HttpContext {
  return cache({ clearGroups: groups });
}

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private requestCache: ApiCache) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const options = req.context.get(CACHE_OPTIONS);

    // Continue if caching is not enabled
    if (!environment.api.cache.enabled || !options) return next.handle(req);

    // Check if we have some caches that are related to this APi call and clear them
    options.clearGroups?.forEach((group) => {
      this.requestCache.clearByGroupName(group);
    });

    // Only GET requests are cacheable - continue if request is not cacheable
    if (req.method !== 'GET') return next.handle(req);

    const cachedResponseBody = this.requestCache.get(req);
    const cachedResponse = new HttpResponse({ status: HttpStatusCode.Ok, body: cachedResponseBody });

    // Refresh the caches
    const response$ = next.handle(req).pipe(
      tap((event) => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          // TODO: Check if need to handle BE errors where we will receive status 200 response with some error message
          //  Issue is that this error will be cached with no way to refresh until cache expires or page is reloaded
          this.requestCache.put(req, event, req.context.get(CACHE_OPTIONS)?.group); // Update the cache.
        }
      })
    );

    if (options.refresh) {
      // TODO: Think about returning only new data (ie. remove startWith(cachedResponse) pipe)
      return cachedResponseBody ? response$.pipe(startWith(cachedResponse)) : response$;
    }

    // Return cached response if it is found or load new data if not
    return cachedResponseBody ? of(cachedResponse) : response$;
  }
}
