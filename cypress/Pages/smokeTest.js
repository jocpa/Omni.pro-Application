
class smokeTest {

    elements = {

        imgCarrusell: () => cy.get('.active > .d-block'),
        categories: () => cy.get('#cat')

    }

}
module.exports = new smokeTest();