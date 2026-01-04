import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import CheckoutonePage from '../pages/checkoutonePage';
import CheckouttwoPage from '../pages/checkouttwoPage';

describe('CheckoutTwo page tests', () => {
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
});

it('TC:001 Check title', () => {
    CheckouttwoPage.getTitle().should('contain','Checkout: Overview');
})

it('TC:002 Check item', () => {
    CheckouttwoPage.getItems().should('contain','Sauce Labs Bike Light');
})

it('TC:003 Check price', () => {
    CheckouttwoPage.getInventoryItemPrice().should('contain','9.99');
})

it('TC:004 Check payment info', () => {
    CheckouttwoPage.getInventoryPaymentInfo().should('contain','SauceCard');
})

it('TC:004 Check subtotal;', () => {
    CheckouttwoPage.getInventorySubtotalLabel().should('contain','9.99');
})

it('TC:004 Check tax;', () => {
    CheckouttwoPage.getInventoryTax().should('contain','0.80');
})

it('TC:004 Check total;', () => {
    CheckouttwoPage.getTotal().should('contain','10.79');
})

it('TC:005 Checks cancel button', () => {
    CheckouttwoPage.clickCancel();
    cy.url({ timeout: 10000 }).should('include','/inventory');
})

it('TC:005=6 Checks finish button', () => {
    CheckouttwoPage.clickFinish();
    cy.url({ timeout: 10000 }).should('include','/checkout-complete');
})




});