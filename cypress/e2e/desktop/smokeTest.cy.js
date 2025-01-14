import smokeTest from "../../Pages/smokeTest";

describe('Smoke Test', () => {
   
    const url = 'https://www.demoblaze.com/'

    it('Should open the page', () => {
       cy.visit(url)

       //Assertions 
       cy.url().should('eq', url)
       cy.location('protocol').should('contains', 'http')
       smokeTest.elements.imgCarrusell().should('exist')
       smokeTest.elements.categories().should('exist')
    });
    
})