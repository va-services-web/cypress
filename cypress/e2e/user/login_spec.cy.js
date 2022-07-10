/// <reference types="cypress" />

import { doLogin } from '../utils';
import user from '../../fixtures/users/realUser.json';

describe('login user', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it("sucessfull login through the UI", () => {
        doLogin(user);
        cy.hash().should('eq', '#/');
    });
})