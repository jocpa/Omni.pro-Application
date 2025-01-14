
class homePage {

    elements = {

       homeCarrusell: () => cy.get('.active > .d-block'),
       samsungSelector: () => cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
       productName: () => cy.get('.name'),
       addToCartBtn: () => cy.get('.col-sm-12 > .btn'),
       cartAchor: () => cy.get('#cartur'),
       productLayer: () => cy.get('.col-lg-8 > h2'),
       placeOrderBtn: () => cy.get('.col-lg-1 > .btn')

    }

    selectProduct() {
        this.elements.samsungSelector().click()
    }
    addProductToCart() {
        this.elements.addToCartBtn().click()
    }
    goToCart(){
        this.elements.cartAchor().click()
    }

}
module.exports = new homePage