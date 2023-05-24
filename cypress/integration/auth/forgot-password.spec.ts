import { User } from '../../models/user';

describe('Forgot Password', () => {
  let user: User;

  before(() => {
    cy.fixture('user.json').then((data) => {
      user = data;
    });
  });

  it('Fill in a valid email that exists in database and send a request', () => {
    cy.visit('/auth/forgot-password');
    cy.get('input[name=email]').type(user.email);
    cy.get('button[data-id=request]').click();

    cy.contains('Request has been sent. Please check your email.');
  });

  // We will get successful response even if email does not exist in database, otherwise it would be a security issue
  it('Fill in a valid email that does not exist in database and send a request', () => {
    cy.visit('/auth/forgot-password');
    cy.get('input[name=email]').type('test5678432@test.com');
    cy.get('button[data-id=request]').click();

    cy.contains('Request has been sent. Please check your email.');
  });

  it('Fill in invalid email and get error message', () => {
    cy.visit('/auth/forgot-password');
    cy.get('input[name=email]').type('test');
    cy.get('button[data-id=request]').click();

    cy.contains('You have entered incorrect details.');
  });

  it('Should have a link to login page', () => {
    cy.visit('/auth/forgot-password');
    cy.get('a[href="/auth/login"]').click();
    cy.location('pathname').should('eq', '/auth/login');
  });
});
