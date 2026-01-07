import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import CartPage from '../pages/cartPage';
import MenuPage from '../pages/menuPages';
import checkoutonePage from '../pages/checkoutonePage';

describe('Menu tests', () => {

  beforeEach(() => {
    cy.viewport(1280, 720);

    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();

    ProductsPage.getTitle().should('contain', 'Products');
  });

  it('TC-057: Open menu', () => {
    MenuPage.openMenu();
    MenuPage.getMenu().should('be.visible');
  });

  it('TC-058: Close menu', () => {
    MenuPage.openMenu();
    MenuPage.closeMenu();
    MenuPage.getMenu().should('not.be.visible');
  });

  it('TC-059: All Items navigates to Products page', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_link').click();
    CartPage.getTitle().should('contain', 'Your Cart');

    MenuPage.openMenu();
    MenuPage.allItems();

    ProductsPage.getTitle().should('contain', 'Products');
  });

  it('TC-060: About redirects to SauceLabs site', () => {
    MenuPage.openMenu();
    MenuPage.about();

    cy.url().should('include', 'saucelabs.com');
  });

  it('TC-061: Logout returns user to login page', () => {
    MenuPage.openMenu();
    MenuPage.logout();

    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('TC-062: Reset App State clears cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('contain', '1');

    MenuPage.openMenu();
    MenuPage.resetAppState();

    cy.get('.shopping_cart_badge').should('not.exist');
  });

  ///////////////////////////////////
  it('TC-063: Menu is not available on login page', () => {
  cy.visit('https://www.saucedemo.com/');

  cy.get('#react-burger-menu-btn').should('not.exist');
});

it('TC-064: Reset App State clears checkout progress', () => {

ProductsPage.openCart();
  CartPage.checkout();

  checkoutonePage.enterFirstName('Test');
  checkoutonePage.enterLastName('User');
  checkoutonePage.enterZipCode('71780');

  MenuPage.openMenu();
  MenuPage.resetAppState();

  ProductsPage.openCart();

  cy.url().should('include', '/cart.html');

  CartPage.checkout();

  checkoutonePage.getFirstName().should('have.value', '');
  checkoutonePage.getLastName().should('have.value', '');
  checkoutonePage.getZipCode().should('have.value', '');
});
});
