/// <reference types="cypress" />

import SettingsPage from "../pageObjects/settingsPage";
import ArticleCreatePage from "../pageObjects/articleCreatePage";

describe('login user', () => {
    
    before(() => {
        cy.login();
        cy.saveLocalStorage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    it("successfully navigate to user settings page as logged in user using command", () => {
        const settingsPage = new SettingsPage();

        settingsPage.visitWithToken()
        
        settingsPage.getTitle()
            .should('be.visible');
    });

    it("successfully navigate to create article page as logged in user using command", () => {
        const articleCreatePage = new ArticleCreatePage();

        articleCreatePage.visitWithToken()
        
        settingsPage.getPublishArticleButton()
            .should('be.visible');
    });
})