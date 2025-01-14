
class placeOrderForm {

    elemements = {

        placeOrderModal: () => cy.get('#orderModalLabel'),
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        creditCardNumber: () => cy.get('#card'),
        mothInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purchaseBtn: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        successAlert: () => cy.get('.showSweetAlert'),
        alertText: () => cy.get('.sweet-alert > h2')
    }
    typeName(name) {
        this.elemements.nameInput().type(name)
    }
    typeCountry(country) {
        this.elemements.countryInput().type(country)
    }
    typeCity(city) {
        this.elemements.cityInput().type(city)
    }
    typeCreditCard(number) {
        this.elemements.creditCardNumber().type(number)
    }
    typeMonth(month) {
        this.elemements.mothInput().type(month)
    }
    typeYear(year) {
        this.elemements.yearInput().type(year)
    }
    purchaseButton() {
        this.elemements.purchaseBtn().click()
    }
}

module.exports = new placeOrderForm