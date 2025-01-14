
class loginPage {
 
    elements = {

        loginAnchor: () => cy.get('#login2'),
        usenameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginBtn: () => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        nameOfUser: () => cy.get('#nameofuser')



    }
    clickAnchor() {
        this.elements.loginAnchor().click()
    }
    typeUserName(name) {
        this.elements.usenameInput().type(name)
    }
    typePassword(pass) {
        this.elements.passwordInput().type(pass)
    }
    clickBtn() {
        this.elements.loginBtn().click()
    }
    
}
module.exports = new loginPage;