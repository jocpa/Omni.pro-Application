import signupPage from "../Pages/signupPage"
///<reference types="cypress" />

describe('Sign up Form', () => {
   const url = 'https://www.demoblaze.com/'

   const username = `user${Math.random()*100}`
   const password = `password${Math.random().toString(36).substring(2, 8)}`

   beforeEach(() => {
    cy.visit(url)
  })
    

   it('Should fill the field of the form', () => {
    
    //Filling the Form
    signupPage.signupAnchor()
    signupPage.typeUserName(username)
    signupPage.typePassword(password)
    signupPage.clickBtn()

    //Validates the alert message
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Sign up successful.'); 
    })

   });
    
})