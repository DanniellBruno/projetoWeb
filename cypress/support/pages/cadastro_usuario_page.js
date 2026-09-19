export default {
    clicarCadastra() {
        cy.get('#btnRegister')
            .click()
    },

    validaMensagemErro(msg) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', msg)         
    },

    preencheNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preencheEmail(email) {
        cy.get('#email')
            .type(email)
    },

     preencheSenha(password) {
        cy.get('#password')
            .type(password)
    },

    validaMensagemSucesso(nome) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    }
}