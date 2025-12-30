class CheckoutonePage {

getTitle() {
    return cy.get('[data-test="title"]')
}


}

export default new CheckoutonePage();