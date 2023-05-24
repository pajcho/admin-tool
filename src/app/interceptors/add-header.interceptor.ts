import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { first, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppState } from '../reducers';
import { tmc, TmcModel } from '../config/tmc';
import { authToken } from '../reducers/auth.reducer';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(authToken).pipe(
      first(),
      withLatestFrom(this.store.select(tmc)),
      mergeMap(([token, tenant]: [string, TmcModel]) => {
        // Clone the request to add the new headers and URL
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(
          req.clone({
            url: AddHeaderInterceptor.setUrl(req),
            headers: AddHeaderInterceptor.setHeaders(req, token, tenant),
          })
        );
      })
    );
  }

  private static setHeaders(req: HttpRequest<any>, token: string, tenant: TmcModel): HttpHeaders {
    let headers = req.headers.set('Application', 'tmcc');

    // We will skip authorisation with DIB tokens for all direct api calls unless they have /api/ in the endpoint
    // All relative API urls (they don't start with http) are internal calls and definitely require authorisation
    // All DFS urls require token since they do not have unified api prefixes (some do, some don't)
    const requiresAuthorization =
      !req.url.startsWith('http') || req.url.includes('/api/') || req.url.includes(environment.api.dfs);

    if (token && requiresAuthorization) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    if (tenant?.id) {
      // Set tenant related key in every API request
      headers = headers.set('tenant-key', tenant.id);
    }

    return headers;
  }

  private static setUrl(req: HttpRequest<any>): string {
    if (req.url.startsWith('/')) {
      return environment.api.backend + req.url;
    }

    return req.url;
  }
}
