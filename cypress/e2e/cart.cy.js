import LoginPage from '../pages/loginPage';
import CartPage from '../pages/cartPage';

describe('Cart Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

    it('TC-006: Verify Cart Loads', () => {
    // 1) dodaj proizvod na products stranici
    cy.contains('.inventory_item', 'Sauce Labs Bike Light')
      .find('button')
      .click();

    // 2) otvori cart
    cy.get('.shopping_cart_link').click();

    // 3) verifikacije
    CartPage.getTitle().should('contain', 'Your Cart');
    CartPage.getCartItems().should('exist');
  });

  it('TC-007: Remove from cart', () => {
    // 1) dodaj proizvod
    cy.contains('.inventory_item', 'Sauce Labs Bike Light')
      .find('button')
      .click();

    // 2) idi u cart
    cy.get('.shopping_cart_link').click();

    // 3) ukloni
    CartPage.removeProductFromCart('Sauce Labs Bike Light');

    // 4) assert
    cy.contains('.cart_item', 'Sauce Labs Bike Light')
      .should('not.exist');
  });



  // DODATNI TESTOVI
  it('TC-202: Add product and verify it appears in cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.getCartItems().should('have.length', 1);
    cy.contains('.cart_item', 'Sauce Labs Backpack').should('exist');
  });

  it('TC-203: Verify quantity for items in cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.getQuantity().should('contain', '1');
  });

  it('TC-204: Verify price of product in cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.getPrice().should('contain', '$29.99');
  });

  it('TC-206: Continue Shopping returns to Products page', () => {
    cy.get('.shopping_cart_link').click();

    CartPage.continueShopping();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('TC-207: Removing product makes cart empty', () => {
    cy.contains('.inventory_item', 'Sauce Labs Bolt T-Shirt')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.removeProductFromCart('Sauce Labs Bolt T-Shirt');

    CartPage.getCartItems().should('not.exist');
  });

  it('TC-208: Checkout button navigates to Checkout Step One page', () => {
  // Dodaj jedan proizvod
  cy.contains('.inventory_item', 'Sauce Labs Backpack')
    .find('button')
    .click();

  // Idi u cart
  cy.get('.shopping_cart_link').click();

  // Klik na checkout
  CartPage.checkout();

  // Assert da smo stvarno na checkout page-u
  cy.get('.title').should('contain', 'Checkout: Your Information');
});


});
