import LoginPage from '../pages/loginPage';

describe('SauceDemo Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('TC-001: Successful Login', () => {
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('TC-002: Login with Invalid Credentials', () => {
    LoginPage.enterUsername('wrong_user');
    LoginPage.enterPassword('wrong_pass');
    LoginPage.clickLogin();
    LoginPage.getError().should('contain', 'Username and password do not match');
  });

  it('TC-003: Login with Locked-Out User', () => {
    LoginPage.enterUsername('locked_out_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    LoginPage.getError().should('contain', 'locked out');
  });

  it('TC-004: Login with Empty Fields', () => {
    LoginPage.clickLogin();
    LoginPage.getError().should('contain', 'Username is required');
  });

  it('TC-005: Locked out user cannot login', () => {
  LoginPage.visit();
  LoginPage.enterUsername('locked_out_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickLogin();

  cy.get('[data-test="error"]').should(
    'contain',
    'Sorry, this user has been locked out.'
  );
});

it('TC-006: Invalid password shows error', () => {
  LoginPage.visit();
  LoginPage.enterUsername('standard_user');
  LoginPage.enterPassword('wrong_password');
  LoginPage.clickLogin();

  cy.get('[data-test="error"]').should(
    'contain',
    'Username and password do not match'
  );
});

it('TC-007: Empty username and password', () => {
  LoginPage.visit();
  LoginPage.clickLogin();

  cy.get('[data-test="error"]').should(
    'contain',
    'Username is required'
  );
});

it('TC-008: Empty password', () => {
  LoginPage.visit();
  LoginPage.enterUsername('standard_user');
  LoginPage.clickLogin();

  cy.get('[data-test="error"]').should(
    'contain',
    'Password is required'
  );
});

});
