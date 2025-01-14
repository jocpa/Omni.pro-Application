import loginPage from "../../Pages/loginPage";

describe('Login Test on Mobile resolution', () => {
   const url = 'https://www.demoblaze.com/'
   const username = `jocpa`
   const password = `Prueba`

    beforeEach(() => {
        cy.viewport('iphone-x'); // Set viewport in Iphone X resolution
        cy.visit(url); 
      });

      it('Should login correcty', () => {
        
        loginPage.elements.categoryField().should('be.visible')

        loginPage.clickAnchor()
        loginPage.typeUserName(username)
        loginPage.typePassword(password)
        loginPage.clickBtn()

        //Validate text "Welcome Username"
        loginPage.elements.nameOfUser().should('exist')

      });
    
})