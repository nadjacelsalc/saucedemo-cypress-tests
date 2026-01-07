class MenuPage {

  openMenu() {
    cy.get('#react-burger-menu-btn').click();
  }

  closeMenu() {
    cy.get('#react-burger-cross-btn').click();
  }

  getMenu() {
    return cy.get('.bm-menu');
  }

  allItems() {
    cy.get('[data-test="inventory-sidebar-link"]').click();
  }

  about() {
    cy.get('[data-test="about-sidebar-link"]').click();
  }

  logout() {
    cy.get('[data-test="logout-sidebar-link"]').click();
  }

  resetAppState() {
    cy.get('[data-test="reset-sidebar-link"]').click();
  }
}

export default new MenuPage();
