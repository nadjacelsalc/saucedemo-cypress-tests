import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import checkoutonePage from '../pages/checkoutonePage';

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


    it('TC:001: Title loads', () => {
        checkoutonePage.getTitle().should('contain','Checkout: Your Information');
    })

    it('TC:002: Data entry', () => {
        checkoutonePage.enterFirstName("Nadja");
        checkoutonePage.enterLastName("Celik");
        checkoutonePage.enterZipCode("71780");
        checkoutonePage.clickContinue();
        cy.url().should('include','/checkout-step-two');
    })

    it('TC:003: Cancel', () => {
        checkoutonePage.clickCancel();
        cy.url().should('include', '/cart');
    })


        
    

    
    
    
    
});