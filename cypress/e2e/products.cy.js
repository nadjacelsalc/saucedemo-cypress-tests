import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';

describe('Products Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

  it('TC-006: Verify Product List Loads', () => {
    ProductsPage.getTitle().should('contain', 'Products');
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('TC-007: Sort Products A-Z', () => {
  cy.url().then(url => {
    console.log("CURRENT URL:", url);
  });

  cy.url().should('include', '/inventory.html');

  ProductsPage.getSortDropdown().should('be.visible');
  ProductsPage.selectSort('Name (A to Z)');

  cy.get('.inventory_item_name')
    .first()
    .should('contain', 'Sauce Labs Backpack');
});


  it('TC-009: Add Product to Cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('TC-009: Add Product to Cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Bike Light');
    cy.get('.shopping_cart_badge').should('contain', '1');
  });


  it('TC-010: Remove Product from Cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    ProductsPage.removeProductFromCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
