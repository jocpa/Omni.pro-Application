import signupPage from "../../Pages/signupPage"


describe('Sign up Form test in mobile resolution', () => {
   const url = 'https://www.demoblaze.com/'

   const user = `jocpa`;
   const pass = `Prueba`

   beforeEach(() => {
    cy.visit(url)
    cy.viewport('iphone-x');
  })
    

   it('Should fail the sign up', () => {
    
    //Filling the Form
    signupPage.signupAnchor()
    cy.wait(500)
    signupPage.typeUserName(user)
    signupPage.typePassword(pass)
    cy.wait(500)
    signupPage.clickBtn()

    //Validates the alert message
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('This user already exist.'); 
    })

   });
    
})