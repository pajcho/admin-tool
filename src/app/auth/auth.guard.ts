import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { isLoggedIn } from '../reducers/auth.reducer';
import { AppState } from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;

    return this.store.select(isLoggedIn).pipe(
      take(1),
      map((loggedIn) => {
        if (loggedIn) return true;

        // Redirect to the login page and preserve the redirect URL
        this.router.navigate(['/auth/login'], { queryParams: { redirectTo: url } });

        return false;
      })
    );
  }
}
