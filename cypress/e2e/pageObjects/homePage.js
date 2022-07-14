import Header from './header'
import SignInPage from './signInPage';

class HomePage {
  constructor() {
    this.header = new Header();
  }

  visit() {
      cy.visit('/');
  }

  getTitle() {
    return cy.contains('h1', 'conduit');
  }

  getFirstAuthor() {
    return cy.get('a[aria-label="profile"]').first();
  }

  getFirstArticleLocator() {
    return 'a[aria-label="article"]';
  }

  getGlobalFeed() {
    return cy.contains('a', 'Global Feed');
  }

  getAllPosts() {
    return cy.get('div.article-preview');
  }

  goToSignInPage() {
    this.header.getSignInLink().click();

    const signInPage = new SignInPage();
    return signInPage;
  }

  goToSignUpPage() {
    this.header.getSignUpLink().click();

    const signUpPage = new SignUpPage();
    return signUpPage;
  }
}

export default HomePage;