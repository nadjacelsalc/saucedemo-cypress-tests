import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import checkoutonePage from '../pages/checkoutonePage';
import MenuPage from '../pages/menuPages'; 

describe('CheckoutOne page tests', () => {
    beforeEach(() => {
    cy.viewport(1280, 720);

    // Login
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();

    ProductsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('.shopping_cart_link').click();

    CartPage.getTitle().should('contain', 'Your Cart');

    CartPage.checkout();
});


    it('TC:035: Title loads', () => {
        checkoutonePage.getTitle().should('contain','Checkout: Your Information');
    })

    it('TC:036: Data entry', () => {
        checkoutonePage.enterFirstName("Nadja");
        checkoutonePage.enterLastName("Celik");
        checkoutonePage.enterZipCode("71780");
        checkoutonePage.clickContinue();
        cy.url().should('include','/checkout-step-two');
    })

    it('TC:037: Cancel', () => {
        checkoutonePage.clickCancel();
        cy.url().should('include', '/cart');
    })

/////////////////////////////////////////
it('TC-038: Submit empty form', () => {
  checkoutonePage.clickContinue();

  cy.get('[data-test="error"]').should(
    'contain',
    'First Name is required'
  );
});

it('TC-039: Missing postal code', () => {
  checkoutonePage.enterFirstName('Test');
  checkoutonePage.enterLastName('User');
  checkoutonePage.clickContinue();

  cy.get('[data-test="error"]').should(
    'contain',
    'Postal Code is required'
  );
});
       
    
});