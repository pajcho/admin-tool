import { User } from '../../models/user';

describe('Login', () => {
  let user: User;
  const appPages = ['/products', '/products/vat-categories', '/companies/bookings?tripId=123'];

  before(() => {
    cy.fixture('user.json').then((data) => {
      user = data;
    });
  });

  describe('Allow login', () => {
    it('Should be possible to navigate to the login page and sign in', () => {
      cy.visit('/auth/login');
      cy.get('input[name=username]').type(user.email);
      cy.get('input[name=password]').type(user.password);
      cy.get('button[data-id="login"]').click();

      cy.location('pathname').should('eq', '/dashboard');
    });

    describe('Redirect a user to intended page if one is supplied using redirectTo query param', () => {
      appPages.forEach((appPage) => {
        it(`From [/auth/login?redirectTo=${appPage}] to [${appPage}]`, () => {
          const [path, search] = appPage.split('?');

          cy.visit('/auth/login', { qs: { redirectTo: appPage } });
          cy.get('input[name=username]').type(user.email);
          cy.get('input[name=password]').type(user.password);
          cy.get('button[data-id="login"]').click();

          cy.location('pathname').should('eq', path);

          // Sometimes we might need to redirect to a page that had query params and we want to validate that too
          search && cy.location('search').should('eq', `?${search}`);
        });
      });
    });

    describe('Redirect a user to dashboard page if redirectTo query param is empty', () => {
      it(`From [/auth/login?redirectTo=] to [/dashboard]`, () => {
        cy.visit('/auth/login', { qs: { redirectTo: '' } });
        cy.get('input[name=username]').type(user.email);
        cy.get('input[name=password]').type(user.password);
        cy.get('button[data-id="login"]').click();

        cy.location('pathname').should('eq', '/dashboard');
      });
    });

    it('Should have a link to forgot password', () => {
      cy.visit('/auth/login');
      cy.get('a[href="/auth/forgot-password"]').click();
      cy.location('pathname').should('eq', '/auth/forgot-password');
    });
  });
});
