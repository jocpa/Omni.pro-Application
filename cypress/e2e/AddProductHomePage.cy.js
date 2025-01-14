import homePage from "../Pages/homePage";
import placeOrderForm from "../Pages/placeOrderForm";

describe('Add Product from Home Page', () => {
    const url = 'https://www.demoblaze.com/'
 
    beforeEach(() => {
     cy.visit(url)
   })

   it('Add pruduct to Cart', () => {
        homePage.elements.homeCarrusell().should('exist')
        homePage.selectProduct()
        homePage.elements.productName().should('exist')
        homePage.addProductToCart()

        //Validates product were added to cart
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added.'); 
        })

        homePage.goToCart()
        homePage.elements.productLayer().should('exist')
   });
    
})