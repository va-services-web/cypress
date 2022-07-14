class SignInPage {

  visit() {
      cy.visit('/login');
  }

  fillInAndSubmit({email, password}) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }

  fillEmail(value) {
    const locator = 'input[type="email"]';
    cy.fillInput(locator, value);
    return this;
  }

  fillPassword(value) {
    const locator = 'input[type="password"]';
    cy.fillInput(locator, value);
    return this;
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default SignInPage;