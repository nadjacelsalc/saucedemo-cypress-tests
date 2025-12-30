class CartPage {

//gets title to chech if the right page is loaded
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

  
}
export default new CartPage();