export default {
    clicarEmLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validaMsgErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    digitarEmail(Email){
        cy.get('#user')
            .type(Email)
    },

    digitarSenha(pass){
        cy.get('#password')
            .type(pass)
    },

    validaMsgSucesso(nome) {
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá, ${nome}`)
    }
}