import homePage from "../../Pages/homePage"
import placeOrderForm from "../../Pages/placeOrderForm"

describe('Checkout Test', () => {
    const url = 'https://www.demoblaze.com/'
 
    beforeEach(() => {
     cy.visit(url)
   })

   it('Should complet all steps without errors', () => {
    
    //Adding product to cart
    homePage.selectProduct()
    homePage.addProductToCart()
   
    homePage.goToCart()
    homePage.placeOrder()

    //Validates if the form is visible
    placeOrderForm.elemements.placeOrderModal().should('be.visible')

    //Filling the form
    placeOrderForm.typeName('Pablo')
    placeOrderForm.typeCountry('Guatemala')
    placeOrderForm.typeCity('Guatemala')
    placeOrderForm.typeCreditCard('3000000000000016')
    placeOrderForm.typeMonth('December')
    placeOrderForm.typeYear('2025')
    cy.wait(500)
    placeOrderForm.purchaseButton()

    //Validates the succes message 
    placeOrderForm.elemements.successAlert().should('be.visible')

   });
    
})