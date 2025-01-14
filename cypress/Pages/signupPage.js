
class signupPage {
 
    elements = {

        signupAnchor: () => cy.get('#signin2'),
        usenameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
        signupBtn: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')

    }
    signupAnchor() {
        this.elements.signupAnchor().click()
    }
    typeUserName(name) {
        this.elements.usenameInput().type(name)
    }
    typePassword(pass) {
        this.elements.passwordInput().type(pass)
    }
    clickBtn() {
        this.elements.signupBtn().click()
    }
    
}
module.exports = new signupPage;