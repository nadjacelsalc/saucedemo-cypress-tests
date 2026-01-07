import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutonePage from '../pages/checkoutonePage';
import CheckouttwoPage from '../pages/checkouttwoPage';
import menuPage from '../pages/menuPages';

describe('CheckoutTwo page tests', () => {
    beforeEach(() => {
    cy.viewport(1280, 720);

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
});

it('TC:047 Check title', () => {
    CheckouttwoPage.getTitle().should('contain','Checkout: Overview');
})

it('TC:048 Check item', () => {
    CheckouttwoPage.getItems().should('contain','Sauce Labs Bike Light');
})

it('TC:049 Check price', () => {
    CheckouttwoPage.getInventoryItemPrice().should('contain','9.99');
})

it('TC:050 Check payment info', () => {
    CheckouttwoPage.getInventoryPaymentInfo().should('contain','SauceCard');
})

it('TC:051 Check subtotal;', () => {
    CheckouttwoPage.getInventorySubtotalLabel().should('contain','9.99');
})

it('TC:052 Check tax;', () => {
    CheckouttwoPage.getInventoryTax().should('contain','0.80');
})

it('TC:053 Check total;', () => {
    CheckouttwoPage.getTotal().should('contain','10.79');
})

it('TC:054 Checks cancel button', () => {
    CheckouttwoPage.clickCancel();
    cy.url({ timeout: 10000 }).should('include','/inventory');
})

it('TC:055 Checks finish button', () => {
    CheckouttwoPage.clickFinish();
    cy.url({ timeout: 10000 }).should('include','/checkout-complete');
})

////////////////////////////////////
it('TC-056: Total price is calculated incorrectly for problem_user', () => {
  menuPage.logout();

  LoginPage.enterUsername('problem_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickLogin();

  ProductsPage.addProductToCart('Sauce Labs Backpack');
  cy.get('.shopping_cart_link').click();
  CartPage.checkout();

   CheckoutonePage.enterFirstName("Nadja");
          CheckoutonePage.enterLastName("Celik");
          CheckoutonePage.enterZipCode("71780");
          CheckoutonePage.clickContinue();

  cy.get('.summary_total_label')
    .should('not.contain', '$32.39');
}); //expected fail


});