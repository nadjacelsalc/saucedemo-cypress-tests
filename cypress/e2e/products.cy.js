import LoginPage from '../pages/loginPage';
import ProductsPage from '../pages/productsPage';
import MenuPage from '../pages/menuPages';


describe('Products Page Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

  it('TC-017: Verify Product List Loads', () => {
    ProductsPage.getTitle().should('contain', 'Products');
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('TC-018: Sort Products A-Z', () => {
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


  it('TC-019: Add Product to Cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('TC-020: Add Product to Cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Bike Light');
    cy.get('.shopping_cart_badge').should('contain', '1');
  });


  it('TC-021: Remove Product from Cart', () => {
    ProductsPage.addProductToCart('Sauce Labs Backpack');
    ProductsPage.removeProductFromCart('Sauce Labs Backpack');
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('TC-022: Cannot add product with broken image (problem_user)', () => {
  MenuPage.logout();

  LoginPage.enterUsername('problem_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickLogin();

  cy.get('.inventory_item_img img')
    .first()
    .should('have.attr', 'src')
    .and('include', 'sl-404');
}); //expected fail

it('TC-023: Sorting Z-A does not reorder correctly for problem_user', () => {
  MenuPage.logout();

  LoginPage.enterUsername('problem_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickLogin();

  ProductsPage.selectSort('Name (Z to A)');

  cy.get('.inventory_item_name')
    .first()
    .should('not.contain', 'Test.allTheThings() T-Shirt');
}); //expected fail

it('TC-024: Performance glitch user loads products slowly', () => {
  MenuPage.logout();

  LoginPage.enterUsername('performance_glitch_user');
  LoginPage.enterPassword('secret_sauce');
  LoginPage.clickLogin();

  cy.get('.inventory_item', { timeout: 10000 }).should('exist');
});
});
