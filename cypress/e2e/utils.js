export function doSignup ({username, email, password}) {
    cy.get('input[type="text"]').type(username);
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
}

export function doLogin ({email, password}) {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click()
}