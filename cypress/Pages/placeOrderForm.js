
class placeOrderForm {

    elemements = {

        placeOrderFormLabel: () => cy.get('#orderModalLabel'),
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityName: () => cy.get('#country'),
        creditCardNumber: () => cy.get('#card'),
        mothInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseBtn: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

}

module.exports = new placeOrderForm