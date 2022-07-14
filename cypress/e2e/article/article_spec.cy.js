/// <reference types="cypress" />

import HomePage from '../pageObjects/homePage';
import ArticlePage from '../pageObjects/ArticlePage';

describe('clicking on an article loads it in a new page', () => {
  const homePage = new HomePage();

  beforeEach(function () {
    homePage.visit();
  });

  it('first article loads on new page', () => {
    cy.clickAndCheckPageUrl(homePage.getFirstArticle());

    const articlePage = new ArticlePage();
    articlePage.getTitle()
      .should('be.visible');
  });
})