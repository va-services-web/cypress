class SignInPage {

    visit() {
        cy.visit('/register');
    }

    fillInAndSubmit({username, email, password}) {
        this.fillUsername(username);
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }

    getErrorMessage() {
        return cy.get('ul.error-messages');
    }
  
    fillUsername(value) {
      const locator = 'input[type="text"]';
      cy.fillInput(locator, value);
      return this;
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