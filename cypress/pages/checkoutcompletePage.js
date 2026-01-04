class CheckoutCompletePage {

  getTitle() {
    return cy.get('.title');
  }

  getCompleteHeader() {
    return cy.get('.complete-header');
  }

  getCompleteText() {
    return cy.get('.complete-text');
  }

  getPonyExpressImage() {
    return cy.get('.pony_express');
  }

  getBackHomeButton() {
    return cy.get('[data-test="back-to-products"]');
  }

  clickBackHome() {
    this.getBackHomeButton().should('be.visible').click();
  }

}

export default new CheckoutCompletePage();
