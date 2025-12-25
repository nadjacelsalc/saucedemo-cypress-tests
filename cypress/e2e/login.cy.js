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
});
