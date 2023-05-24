import { User } from '../../models/user';
import { environment } from '../../../src/environments/environment';

export const login = (user: User, overwrites: Partial<User> = {}): void => {
  cy.request({
    method: 'POST',
    url: `${environment.api.backend}/api/tmcc/authenticate`,
    headers: {
      Application: 'tmcc',
      'tenant-key': 'dib',
    },
    body: {
      username: user.email,
      password: user.password,
    },
  })
    .its('body')
    .then((user: User) => {
      cy.log(user.token);

      cy.setLocalStorage('currentUser', JSON.stringify({ ...user, ...overwrites }));
    });
};
