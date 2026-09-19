export default {
    acessarHomePage() {
        cy.visit('/')
            .get('#top_header')
        
        cy.get('.fa-user')
            .click()
    }
}