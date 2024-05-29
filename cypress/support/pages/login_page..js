
export default {
    clicaLogin(login) {
        cy.get('#btnLogin')
            .click()
    },

    checkErrorMessage(message) {
        cy.get('.invalid_input')
            .should('have.text', message)
    
    },

    checkSucessMessage(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
    
            cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)   
    },

    fillEmail(email) {
        cy.get('#user')
            .type(email)
    },

    fillSenha(senha){
        cy.get('#password')
            .type(senha)
}


}

