import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take, withLatestFrom } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { isLoggedIn } from '../reducers/auth.reducer';
import { AppState } from '../reducers';
import { selectQueryParam } from '../reducers/router.reducer';

@Injectable({
  providedIn: 'root',
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(isLoggedIn).pipe(
      take(1),
      withLatestFrom(this.store.select(selectQueryParam('redirectTo'))),
      map(([loggedIn, redirectTo]) => {
        if (loggedIn) {
          this.router.navigateByUrl(redirectTo || '/dashboard').then(noop);

          return false;
        }

        return true;
      })
    );
  }
}
