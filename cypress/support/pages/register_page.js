/// <reference types="cypress" />

export default {

    fillNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    fillEmail(emailinvalido) {
        cy.get('#email')
            .type(emailinvalido)
    },

    fillEmail(email) {
        cy.get('#email')
            .type(email)
    },

    fillSenha(senhainvalida) {
        cy.get('#password')
            .type(senhainvalida)
    },

    fillSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    clicaCadastrar(cadastrar) {
        cy.get('#btnRegister')
            .click()
    },

    checkErrorMensage(message) {
        cy.get('.errorLabel')
            .should('have.text', message)
    
    },

    checkSucessMenssage(nome) {
        cy.get('#swal2-title')
          .should('be.visible')
          .should('have.text', 'Cadastro realizado!')
    
        cy.get('#swal2-html-container')
           .should('be.visible')
           .should('have.text', `Bem-vindo ${nome}`)   
   }

}

