
describe('Smoke Test', () => {
   
    const url = 'https://www.demoblaze.com/'

    it('Should open the page', () => {
       cy.visit(url)
    });
    
})