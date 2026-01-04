class CheckouttwoPage {

    getTitle(){
        return cy.get('[data-test="title"]');
    }

    getItems(){
        return cy.get('[data-test="inventory-item-name"]');
    }

    getInventoryItemPrice(){
        return cy.get('[data-test="inventory-item-price"]');
    }
    getInventoryPaymentInfo(){
        return cy.get('[data-test="payment-info-value"]');
    }
    getInventorySubtotalLabel(){
        return cy.get('[data-test="subtotal-label"]');
    }
    getInventoryTax(){
        return cy.get('[data-test="tax-label"]');
    }
    getTotal(){
        return cy.get('[data-test="total-label"]');
    }
    clickCancel(){
        cy.get('[data-test="cancel"]').click();
    }
    clickFinish(){
        cy.get('[data-test="finish"]').click();
    }

}
export default new CheckouttwoPage();