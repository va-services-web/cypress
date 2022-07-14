/// <reference types="cypress" />

import HomePage from '../pageObjects/homePage';
import ProfilePage from '../pageObjects/profilePage';

describe('clicking on a username loads the users page', () => {
  const homePage = new HomePage();

  beforeEach(function () {
    homePage.visit();
  });
  
  it('after user is clicked on landing page the user page is loaded', () => {
    cy.clickAndCheckPageUrl(homePage.getFirstArticleLocator());
      
    const profilePage = new ProfilePage();

    profilePage.getUserName()
      .should('be.visible');
  });  
})