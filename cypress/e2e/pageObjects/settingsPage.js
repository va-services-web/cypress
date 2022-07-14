class SettingsPage {

    visitWithToken() {
        cy.visitWithToken('/settings');
    }

    getTitle() {
        return cy.contains('h1', 'Your Settings');
    }
}

export default SettingsPage;