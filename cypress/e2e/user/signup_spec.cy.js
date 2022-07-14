///  <reference types="cypress" />

import SignUpPage from '../pageObjects/SignUpPage';
import HomePage from '../pageObjects/HomePage';
import user from '../../fixtures/users/testUser.json';

describe('testing signup functionality', () => {
    const backendApiUrl = Cypress.env('backendApiUrl');
    const signUpPage = new SignUpPage();

    beforeEach(() => {
        signUpPage.visit();
    });

    it("displays correct error when trying to sigup with an existing email with mock", () => {
        cy.intercept('POST', backendApiUrl + '/users', { statusCode: 422, fixture: 'signupErrorResponse.json'});

        signUpPage.fillInAndSubmit(user);

        signUpPage.getErrorMessage()
            .contains('email [ "has already been taken" ]')
            .should('be.visible');
    });

    it("successful sigup with mock", () => {
        cy.intercept('POST', backendApiUrl + '/users', { statusCode: 201, fixture: 'signupResponse.json'});
        cy.intercept('GET', backendApiUrl + '/articles', { fixture: 'articlesData.json'});
        cy.intercept('GET', backendApiUrl + '/tags', { fixture: 'tagsData.json'});

        signUpPage.fillInAndSubmit(user);

        const homePage = new HomePage();
        homePage.getTitle
            .should('be.visible');
    });
})