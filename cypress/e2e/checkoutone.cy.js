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

    // Add product
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Open cart page
    cy.get('.shopping_cart_link').click();

    // Check that cart actually loaded
    CartPage.getTitle().should('contain', 'Your Cart');

    // Click checkout
    CartPage.checkout();
});


    it('TC:001: Title loads', () => {
        checkoutonePage.getTitle().should('contain','Checkout: Your Information');
    })
        
    

    
    
    
    
});