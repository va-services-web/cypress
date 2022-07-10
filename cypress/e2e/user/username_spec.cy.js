/// <reference types="cypress" />

describe('clicking on a username loads the users page', () => {

  beforeEach(function () {
    cy.visit('/');
  });
  
  it('after user is clicked on landing page the user page is loaded', () => {
    cy.get('a[aria-label="profile"]').first().as('author')
        .invoke('attr', 'href')
          .then((href) => {
            cy.get('@author').first().click().url().should('include', href);
          });
      
      cy.contains('h4', 'Gerald').should('be.visible');
  });  
})