import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SplitSortParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({ params: SplitSortParamInterceptor.splitSortParam(req.params) }));
  }

  private static splitSortParam(params: HttpParams): HttpParams {
    if (params.has('sort') && params.get('sort').includes('|')) {
      // Cache the sort value
      const sort = params.get('sort');

      // Remove it from params list
      params = params.delete('sort');

      // And repopulate with each individual sort value separately
      sort.split('|').forEach((sortBy) => {
        params = params.append('sort', sortBy);
      });
    }

    return params;
  }
}
