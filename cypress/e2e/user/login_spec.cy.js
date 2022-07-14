/// <reference types="cypress" />

import SignInPage from '../pageObjects/SignInPage';
import user from '../../fixtures/users/realUser.json';

describe('login user', () => {
    const signInPage = new SignInPage();

    beforeEach(() => {
        signInPage.visit();
    });

    it("sucessfull login through the UI", () => {
        signInPage.fillInAndSubmit(user);

        cy.hash().should('eq', '#/');
    });
})