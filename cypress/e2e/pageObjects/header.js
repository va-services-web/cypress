class Header {
    
      getSignInLink() {
          return cy.get('a[aria-label="login"]')
      }
    
      getSignUpLink() {
        return cy.get('a[aria-label="register"]')
      }
    }
    
export default Header;