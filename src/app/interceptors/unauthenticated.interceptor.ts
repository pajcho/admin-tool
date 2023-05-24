import { HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { AuthActions } from '../actions/auth.actions';
import { selectUrl } from '../reducers/router.reducer';

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
  private cancelAllPendingRequests = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      takeUntil(this.cancelAllPendingRequests),
      catchError((err) => {
        // We are only interested in 401 code here, so throw regular error if anything else happens
        if (err.status !== HttpStatusCode.Unauthorized) return throwError(err);

        return this.store.select(selectUrl).pipe(
          takeUntil(this.cancelAllPendingRequests),
          map((url) => {
            if (!url.startsWith('/auth/login')) {
              // Auto logout if 401 response returned from API
              this.store.dispatch(AuthActions.logout('Session expired'));

              // Cancel any pending requests since we are redirecting user to the login page
              this.cancelAllPendingRequests.next();
            }

            return throwError(err);
          })
        );
      })
    );
  }
}
