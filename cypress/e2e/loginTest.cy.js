import loginPage from "../Pages/loginPage";

describe('Login Test', () => {
   const url = 'https://www.demoblaze.com/'

   const username = `jocpa`
   const password = `Prueba`

   beforeEach(() => {
    cy.visit(url)
  })

  it('Should login correctly', () => {
    
    loginPage.clickAnchor()
    loginPage.typeUserName(username)
    loginPage.typePassword(password)
    loginPage.clickBtn()

    //Validate text "Welcome Username"
    loginPage.elements.nameOfUser().should('exist')

  });

  it('Wrong Credentials', () => {

    loginPage.clickAnchor()
    loginPage.typeUserName('baduser')
    loginPage.typePassword('badpass')
    loginPage.clickBtn()


    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Wrong password.'); 
    })
  });
    
})