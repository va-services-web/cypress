///  <reference types="cypress" />

import { doSignup } from '../utils';
import user from '../../fixtures/users/testUser.json';

describe('testing signup functionality', () => {
    const backendApiUrl = Cypress.env('backendApiUrl');

    beforeEach(() => {
        cy.visit('/register');
    });

    it("displays correct error when trying to sigup with an existing email with mock", () => {
        cy.intercept('POST', backendApiUrl + '/users', { statusCode: 422, fixture: 'signupErrorResponse.json'});

        doSignup(user);
        cy.contains('email [ "has already been taken" ]').should('be.visible');
    });

    it("successful sigup with mock", () => {
        cy.intercept('POST', backendApiUrl + '/users', { statusCode: 201, fixture: 'signupResponse.json'});
        cy.intercept('GET', backendApiUrl + '/articles', { fixture: 'articlesData.json'});
        cy.intercept('GET', backendApiUrl + '/tags', { fixture: 'tagsData.json'});

        doSignup(user);
        cy.contains('h1', 'conduit').should('be.visible');
    });
})