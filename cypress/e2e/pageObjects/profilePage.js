class ProfilePage {

  getUserName() {
    return cy.contains('h4', 'Gerald');
  }
}

export default ProfilePage;