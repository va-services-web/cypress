/// <reference types="cypress" />

describe('from the landing page, clicking on a popular tag navigates the user to the results page of that tag', () => {
    beforeEach(function () {
      cy.visit('/');
    });
  
    it('user clicks on first popular tag', () => {
        cy.contains('a', 'Global Feed').should('be.visible');

        let tagText;
        cy.get('a[aria-label="tag"]').first().as('popularTag')
            .then( $tag => {
                tagText = $tag.text();
            })
            .invoke('attr', 'href')
                .then( href => {
                    cy.get('@popularTag').first().click().url().should('include', href);

                    cy.get('ul.tag-list').each( $el  => {
                        expect($el.text()).to.contain(tagText);
                    });
                });
        });
  })