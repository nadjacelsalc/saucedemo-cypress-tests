class CartPage {

//gets title to check if the right page is loaded
  getTitle() {
    return cy.get('.title');
  }

getCartItems() {
    return cy.get('.cart_item');
}

getQuantity(){
    return cy.get('[data-test="item-quantity"]');
}

getPrice(){
    return cy.get('[data-test="inventory-item-price"]');
}

// remove from cart
removeProductFromCart(productName) {
  cy.contains('.cart_item', productName)
    .find('button')
    .click();
}


 continueShopping() {
    cy.get('[data-test="continue-shopping"]').click();
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
}

}
export default new CartPage();