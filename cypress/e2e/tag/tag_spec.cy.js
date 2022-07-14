/// <reference types="cypress" />

import HomePage from '../pageObjects/homePage';

describe('from the landing page, clicking on a popular tag navigates the user to the results page of that tag', () => {
    const homePage = new HomePage();

    beforeEach(function () {
      homePage.visit();
    });
  
    it('user clicks on first popular tag', () => {
        homePage.getGlobalFeed()
        .should('be.visible');
        
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