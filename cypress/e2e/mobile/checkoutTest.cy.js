const homePage = require("../../Pages/homePage");
const placeOrderForm = require("../../Pages/placeOrderForm");

describe('Checkout Test', () => {
    const url = 'https://www.demoblaze.com/'
 
    beforeEach(() => {
     cy.visit(url)
     cy.viewport('iphone-x');
   })

   it('Should complet all steps without errors', () => {
    
    //Adding product to cart
    homePage.selectProduct()
    homePage.addProductToCart()
    homePage.goToCart()
    homePage.placeOrder()

    cy.wait(1000)

    //Validates if the form is visible
    placeOrderForm.elemements.placeOrderModal().should('be.visible')

    //Filling the form
    placeOrderForm.typeName('Miles Morales')
    placeOrderForm.typeCountry('United States')
    placeOrderForm.typeCity('New York')
    placeOrderForm.typeCreditCard('240360000220032016')
    placeOrderForm.typeMonth('July')
    placeOrderForm.typeYear('2025')
    placeOrderForm.purchaseButton()

    //Validates the succes message 
    placeOrderForm.elemements.successAlert().should('be.visible')
    placeOrderForm.elemements.alertText().invoke('text')
                                         .should('equal', 'Thank you for your purchase!')

    cy.wait(500)
    placeOrderForm.ConfirmBtn()
    cy.url().should('eq', 'https://www.demoblaze.com/index.html')
   });
    
})