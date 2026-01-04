import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutonePage from '../pages/checkoutonePage';
import CheckouttwoPage from '../pages/checkouttwoPage';import CheckoutCompletePage from '../pages/checkoutcompletePage';
import checkouttwoPage from '../pages/checkouttwoPage';

describe('Checkout Complete page tests', () => {

  beforeEach(() => {
    
        cy.viewport(1280, 720);
    
        // Login
        LoginPage.visit();
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
    
        ProductsPage.addProductToCart('Sauce Labs Bike Light');
        cy.get('.shopping_cart_badge').should('contain', '1');
    
        cy.get('.shopping_cart_link').click();
    
        CartPage.getTitle().should('contain', 'Your Cart');
    
        CartPage.checkout();
        CheckoutonePage.enterFirstName("Nadja");
                CheckoutonePage.enterLastName("Celik");
                CheckoutonePage.enterZipCode("71780");
                CheckoutonePage.clickContinue();
                cy.url().should('include','/checkout-step-two');

        checkouttwoPage.clickFinish();
   
  });

  it('TC-001: Page loads successfully', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
  });

  it('TC-002: Verify page title', () => {
    CheckoutCompletePage.getTitle()
      .should('be.visible')
      .and('contain', 'Checkout: Complete!');
  });

  it('TC-003: Verify success header message', () => {
    CheckoutCompletePage.getCompleteHeader()
      .should('be.visible')
      .and('contain', 'Thank you for your order!');
  });

  it('TC-004: Verify success description text', () => {
    CheckoutCompletePage.getCompleteText()
      .should('be.visible')
      .and('contain', 'Your order has been dispatched');
  });

  it('TC-005: Verify success image is displayed', () => {
    CheckoutCompletePage.getPonyExpressImage()
      .should('be.visible');
  });

  it('TC-006: Verify Back Home button exists', () => {
    CheckoutCompletePage.getBackHomeButton()
      .should('be.visible')
      .and('contain', 'Back Home');
  });

  it('TC-007: Verify Back Home button navigates to inventory page', () => {
    CheckoutCompletePage.clickBackHome();
    cy.url().should('include', '/inventory');
  });

});
