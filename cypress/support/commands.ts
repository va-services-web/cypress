/// <reference types="cypress" />

import "cypress-localstorage-commands";

Cypress.Commands.add('login', () => {
    const backendApiUrl = Cypress.env('backendApiUrl');
    cy.fixture('users/realUser.json').then( ({email, password}) => {
        cy.request({
            method: 'POST',
            url: backendApiUrl + '/users/login',
            body: { user: {email, password} }
        })
        .then( res => {
            cy.setLocalStorage('token', res.body.user.token);
            cy.setLocalStorage('user', JSON.stringify(res.body.user));
        });
    });
});

Cypress.Commands.add('visitWithToken', (url) => {
    cy.getLocalStorage('token').then( token => {
        return cy.visit({
            url: Cypress.config().baseUrl + url,
            headers: {
                authorization: 'Bearer ' + token
            }
        });
    });
});

Cypress.Commands.add('fillInput', (locator, value) => {
    const field = cy.get(locator);
    field.clear();
    field.type(value);
});

Cypress.Commands.add('clickAndCheckPageUrl', (locator) => {
    cy.get(locator).first().as('tag')
        .invoke('attr', 'href')
        .then((href) => {
            cy.get('@tag').first().click().url().should('include', href);
        });
});