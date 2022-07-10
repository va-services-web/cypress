/// <reference types="cypress" />

describe('login user', () => {
    
    before(() => {
        cy.login();
        cy.saveLocalStorage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it("successfully navigate to user settings page as logged in user using command", () => {
        cy.visitWithToken('/settings');
        cy.contains('h1', 'Your Settings').should('be.visible');
    });

    it("successfully navigate to create article page as logged in user using command", () => {
        cy.visitWithToken('/article/create');
        cy.get('button[type="submit"]').should('be.visible');
    });
})