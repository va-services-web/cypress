/// <reference types="cypress" />

describe('clicking on an article loads it in a new page', () => {

  beforeEach(function () {
    cy.visit('/');
  });

  it('first article loads on new page', () => {
      cy.get('a[aria-label="article"]').first().as('article')
      .invoke('attr', 'href')
        .then(href => {
          cy.get('@article').click().url().should('include', href);
        });
  });
})