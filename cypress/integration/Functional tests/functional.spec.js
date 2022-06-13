/// <reference types="cypress"/>

describe('Should test at a functional level', () => {
   before(() => {
    cy.visit('https://barrigareact.wcaquino.me')
    cy.get('[data-test="email"]').type('teste@qaadriano.com.br')
    cy.get('[data-test="passwd"]').type('qaadriano')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Bem vindo')
   })

   it('Should create an account', () => {
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('Conta_1')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'inserida com sucesso')
   })

   it('Should update an account', () => {
    cy.xpath("//table//td[contains(., 'Conta_1')]/..//i[@class='far fa-edit']").click()
    cy.get('[data-test="nome"]')
        .clear()
        .type('Conta alterada')
        cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'atualizada com sucesso')
    
   });
});