import signupPage from "../../Pages/signupPage"
import { generateUniquePassword } from "../../helpers/randomUserName"

const randomUserName = generateUniquePassword()

describe('Sign up Form', () => {
   const url = 'https://www.demoblaze.com/'

   const userName = `user:${randomUserName}`
   const password = `password${Math.random()}`

   beforeEach(() => {
    cy.visit(url)
  })
    
   it('Should fill the field of the form', () => {
    
    //Filling the Form
    signupPage.signupAnchor()
    cy.wait(500)

    signupPage.typeUserName(userName)
    signupPage.typePassword(password)

    cy.wait(500)
    signupPage.clickBtn()

    //Validates the alert message
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Sign up successful.'); 
    })

   });
    
})