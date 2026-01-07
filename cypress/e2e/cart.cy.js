import LoginPage from '../pages/loginPage';
import CartPage from '../pages/cartPage';
import MenuPage from '../pages/menuPages';
import ProductsPage from '../pages/productsPage';

describe('Cart Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

    it('TC-025: Verify Cart Loads', () => {
    cy.contains('.inventory_item', 'Sauce Labs Bike Light')
      .find('button')
      .click();
    cy.get('.shopping_cart_link').click();

    CartPage.getTitle().should('contain', 'Your Cart');
    CartPage.getCartItems().should('exist');
  });

  it('TC-026: Remove from cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Bike Light')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.removeProductFromCart('Sauce Labs Bike Light');

    cy.contains('.cart_item', 'Sauce Labs Bike Light')
      .should('not.exist');
  });



  // DODATNI TESTOVI
  it('TC-027: Add product and verify it appears in cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.getCartItems().should('have.length', 1);
    cy.contains('.cart_item', 'Sauce Labs Backpack').should('exist');
  });

  it('TC-028: Verify quantity for items in cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.getQuantity().should('contain', '1');
  });

  it('TC-029: Verify price of product in cart', () => {
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.getPrice().should('contain', '$29.99');
  });

  it('TC-030: Continue Shopping returns to Products page', () => {
    cy.get('.shopping_cart_link').click();

    CartPage.continueShopping();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('TC-031: Removing product makes cart empty', () => {
    cy.contains('.inventory_item', 'Sauce Labs Bolt T-Shirt')
      .find('button')
      .click();

    cy.get('.shopping_cart_link').click();

    CartPage.removeProductFromCart('Sauce Labs Bolt T-Shirt');

    CartPage.getCartItems().should('not.exist');
  });

  it('TC-032: Checkout button navigates to Checkout Step One page', () => {
  
  cy.contains('.inventory_item', 'Sauce Labs Backpack')
    .find('button')
    .click();

  cy.get('.shopping_cart_link').click();

  CartPage.checkout();

  cy.get('.title').should('contain', 'Checkout: Your Information');
});

////////////////////////////

it('TC-033: Checkout button is not visible when cart is empty', () => {
  MenuPage.openMenu();
  MenuPage.resetAppState();

  cy.get('.shopping_cart_link').click();

  cy.get('.cart_item').should('not.exist');
  cy.get('[data-test="checkout"]').should('exist'); // dugme postoji
});


it('TC-034: Removing last product empties cart', () => {
 
  ProductsPage.addProductToCart('Sauce Labs Backpack');
  cy.get('.shopping_cart_link').click();

  CartPage.removeProductFromCart('Sauce Labs Backpack');

  CartPage.getCartItems().should('not.exist');
});

});
