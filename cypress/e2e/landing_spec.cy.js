/// <reference types="cypress" />

import HomePage from './pageObjects/homePage';

describe('viewing the landing page works, and checking that a list of articles loads', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visit();
    });

    it('landing page has the correct h1 title', () => {
        homePage.getTitle()
            .should('be.visible');
    });

    it('articles are loaded on landing page', () => {
        homePage.getAllPosts()
            .should('not.be.empty');
    });
})