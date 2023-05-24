import { User } from '../../models/user';

describe('Logout', () => {
  let user: User;

  before(() => {
    cy.fixture('user.json').then((data) => {
      user = data;
    });
  });

  it('Should be possible to logout after a successful login', () => {
    cy.login(user);

    // Visit the home page
    cy.visit('/');

    // Make sure user menu is not opened by default
    cy.get('[data-id="user-menu"]').should('not.exist');

    // And make sure we have a localstorage session data
    cy.getLocalStorage('currentUser').should('exist');

    // Click logout button
    cy.get('button[data-id="user-menu-button"]').click();

    // Make sure there is a user menu now
    cy.get('[data-id="user-menu"]').should('exist');
    cy.get('[data-id="user-menu"]').should('be.visible');

    // And that there is a logout button
    cy.get('button[data-id="user-menu-logout"]').should('exist');
    cy.get('button[data-id="user-menu-logout"]').click();

    // Validate we are on a login page
    cy.location('pathname').should('eq', '/auth/login');

    // With a success message displayed
    cy.contains('Logged out successfully');

    // Validate localstorage session details are deleted
    cy.getLocalStorage('currentUser').should('not.exist');
  });
});
