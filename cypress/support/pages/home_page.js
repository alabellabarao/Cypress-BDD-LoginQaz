// 3 - Criar as ações
/// <reference types="cypress" />

export default {
    acessLogin() {
        cy.visit('/')
            .get('#top_header')
       
        cy.get('.fa-user')
            .click()
    },

    acessCadastro() {
        cy.visit('/')
            .get('#top_header')
       
        cy.get('.fa-lock')
            .click()
    }
}
