/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'


describe('Should test at a functional level', () => {
   before(() => {
    cy.login('teste@qaadriano.com.br', 'qaadriano')
    cy.resetApp()
    // cy.visit('https://barrigareact.wcaquino.me')
    // cy.get(loc.LOGIN.USER).type('teste@qaadriano.com.br')
    // cy.get(loc.LOGIN.PASSWORD).type('qaadriano')
    // cy.get(loc.LOGIN.BTN_LOGIN).click()
    // cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
   })

   it('Should create an account', () => {
    cy.acessarMenuConta()
    cy.inserirConta('Conta_1')
    cy.get(loc.MESSAGE).should('contain', 'inserida com sucesso')
    // cy.get(loc.MENU.SETTINGS).click()
    // cy.get(loc.MENU.CONTAS).click()
    // cy.get(loc.CONTAS.NOME).type('Conta_1')
    // cy.get(loc.CONTAS.BTN_SALVAR).click()
   })

   it('Should update an account', () => {
    cy.acessarMenuConta()
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
    cy.get(loc.CONTAS.NOME)
        .clear()
        .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'atualizada com sucesso')    
   })

   it('Should not create an account with same name', () => {
    cy.acessarMenuConta()
    cy.inserirConta('Conta alterada')
    cy.get(loc.MESSAGE).should('contain', 'code 400')



   });
});