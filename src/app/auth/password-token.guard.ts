import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { AppState } from '../reducers';
import { GlobalActions } from '../actions/global.actions';

@Injectable({
  providedIn: 'root',
})
export class PasswordTokenGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.validatePasswordToken(route.queryParams.token).pipe(
      map((isValid) => {
        if (!isValid) {
          this.store.dispatch(
            GlobalActions.showErrorMessage({ message: 'Invalid or expired token. Please double check your email.' })
          );
          this.router.navigate(['/auth/login']);
          return false;
        }

        return true;
      })
    );
  }
}
