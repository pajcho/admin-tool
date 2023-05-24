import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    // Login Actions
    Login: props<Pick<User, 'username' | 'password'>>(),
    'Login Start': emptyProps(),
    'Login Success': props<{ data: User }>(),
    'Login Error': props<{ error: string }>(),

    // Logout Actions
    Logout: (message?: string) => ({ message }),
    'Logout Start': emptyProps(),
    'Logout Success': (message?: string) => ({ message }),
    'Logout Error': props<{ error: string }>(),

    // Forgot Password Actions
    'Forgot Password': props<{ email: string }>(),
    'Forgot Password Start': emptyProps(),
    'Forgot Password Success': emptyProps(),
    'Forgot Password Error': props<{ error: string }>(),

    // Change Password Actions
    'Change Password': props<{ id: string; password: string }>(),
    'Change Password Start': emptyProps(),
    'Change Password Success': emptyProps(),
    'Change Password Error': props<{ error: string }>(),

    // Set Password Actions
    'Set Password': props<{ id: string; password: string }>(),
    'Set Password Start': emptyProps(),
    'Set Password Success': emptyProps(),
    'Set Password Error': props<{ error: string }>(),

    // Logged-In User Actions
    'Set Logged In User': props<{ data: User }>(),
  },
});
