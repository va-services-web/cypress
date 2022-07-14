class CreateArticlePage {

    visitWithToken() {
        cy.visitWithToken('/article/create');
    }

    getPublishArticleButton() {
        return cy.get('button[type="submit"]')
    }
}

export default CreateArticlePage;