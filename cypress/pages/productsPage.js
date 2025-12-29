class ProductsPage {

  //gets title to chech if the right page is loaded
  getTitle() {
    return cy.get('.title');
  }

  //finds element with productName, that has inventory_item class and clicks it's button
  addProductToCart(productName) {
    cy.contains('.inventory_item', productName)
      .find('button')
      .click();
  }

  //remove from cart
  removeProductFromCart(productName) {
    cy.contains('.inventory_item', productName)
      .find('button')
      .click();
  }

  //open cart
  openCart() {
    cy.get('.shopping_cart_link').click();
  }

  //sort products
  getSortDropdown() {
  return cy.get('[data-test="product-sort-container"]');
}

  selectSort(optionText) {
    cy.get('[data-test="product-sort-container"]').select(optionText);
  }
}

export default new ProductsPage();
