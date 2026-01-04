class CheckoutonePage {

getTitle() {
    return cy.get('[data-test="title"]')
}

enterFirstName(firstName){
cy.get('[data-test="firstName"]').type(firstName)
}

enterLastName(lastName){
cy.get('[data-test="lastName"]').type(lastName)
}

enterZipCode(zipCode){
cy.get('[data-test="postalCode"]').type(zipCode)
}

clickContinue(){
cy.get('[data-test="continue"]').click()
}

clickCancel(){
    cy.get('[data-test="cancel"]').click()
}

}

export default new CheckoutonePage();