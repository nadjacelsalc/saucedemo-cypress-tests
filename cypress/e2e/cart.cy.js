import LoginPage from '../pages/loginPage';
import CartPage from '../pages/cartPage';

describe('Products Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    //cy.get('.shopping_cart_link').click();

  });


it('TC-006: Verify Cart Loads', () => {

    // 1) prvo dodaj proizvod na products stranici
  cy.contains('.inventory_item', 'Sauce Labs Bike Light')
    .find('button')
    .click();

    cy.get('.shopping_cart_link').click();
    CartPage.getTitle().should('contain', 'Your Cart');
    CartPage.getCartItems().should('exist');
});

it('TC-007: Remove from cart', () => {

  // 1) prvo dodaj proizvod na products stranici
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


})