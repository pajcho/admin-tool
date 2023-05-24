describe('Login command', () => {
  before(() => {
    cy.fixture('user.json').then((user) => {
      cy.login(user);
      cy.saveLocalStorage();
    });
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it('User session should be saved into local storage', () => {
    cy.getLocalStorage('currentUser').should('exist');
    cy.getLocalStorage('currentUser').then((user) => {
      expect(user).to.exist;
      expect(JSON.parse(user || '')).to.haveOwnProperty('token');
    });
  });

  it('Tests can reuse user session from local storage', () => {
    cy.getLocalStorage('currentUser').should('exist');
    cy.getLocalStorage('currentUser').then((user) => {
      expect(user).to.exist;
      expect(JSON.parse(user || '')).to.haveOwnProperty('token');
    });
  });
});
