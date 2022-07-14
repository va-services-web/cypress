class ArticlePage {

    getTitle() {
      return cy.contains('h1');
    }
  }
  
  export default ArticlePage;