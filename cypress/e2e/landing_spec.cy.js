/// <reference types="cypress" />

describe('viewing the landing page works, and checking that a list of articles loads', () => {

    beforeEach(() => {
        cy.visit('/');
    });
    it('landing page has the correct h1 title', () => {
      cy.contains('h1', 'conduit').should('be.visible');
    });

    it('articles are loaded on landing page', () => {
        cy.get('div.article-preview').should('not.be.empty');
    });
})