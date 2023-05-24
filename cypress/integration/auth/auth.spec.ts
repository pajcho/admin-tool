import { User } from '../../models/user';

describe('Auth', () => {
  let user: User;
  const authPages = ['/auth/login', '/auth/forgot-password'];
  const appPages = ['/products', '/products/vat-categories', '/companies/bookings?tripId=123'];

  before(() => {
    cy.fixture('user.json').then((data) => {
      user = data;
    });
  });

  describe('Prevents unauthorised access', () => {
    describe('Redirects to login page with redirectTo param if user tries to access other page', () => {
      appPages.forEach((page) => {
        it(`From [${page}] to [/auth/login?redirectTo=${page}]`, () => {
          cy.visit(page);

          cy.location('pathname').should('eq', '/auth/login');
          cy.location('search').should('eq', `?redirectTo=${encodeURIComponent(page)}`);
        });
      });
    });

    describe('Redirects to login page if 401 error is returned from any API', () => {
      appPages.forEach((page) => {
        it(`From [${page}] to [/auth/login]`, () => {
          // Login a user with invalid auth token to trigger 401 errors
          cy.login(user, { token: `invalid-token.${window.btoa('{}')}` });

          cy.visit(page);
          cy.location('pathname').should('eq', '/auth/login');
        });
      });
    });
  });

  describe('Redirects logged in users', () => {
    describe('To a dashboard page by default', () => {
      authPages.forEach((page) => {
        it(`From [${page}] to [/dashboard]`, () => {
          cy.login(user);

          cy.visit(page);
          cy.location('pathname').should('eq', '/dashboard');
        });
      });
    });
    describe('To a intended page if one is supplied using redirectTo query param', () => {
      authPages.forEach((authPage) => {
        appPages.forEach((appPage) => {
          it(`From [${authPage}?redirectTo=${appPage}] to [${appPage}]`, () => {
            cy.login(user);

            const [path, search] = appPage.split('?');

            cy.visit(authPage, { qs: { redirectTo: appPage } });
            cy.location('pathname').should('eq', path);

            // Sometimes we might need to redirect to a page that had query params and we want to validate that too
            search && cy.location('search').should('eq', `?${search}`);
          });
        });
      });
    });
  });
});
