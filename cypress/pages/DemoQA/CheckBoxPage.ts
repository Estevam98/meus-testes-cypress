class CheckBoxPage {
  visit() {
    cy.visit('https://demoqa.com/checkbox')
  }

  selectHome() {
    cy.get('[aria-label="Select Home"]').click()
  }

  checkMessage() {
  cy.contains('You have selected :').should('be.visible')
}
}

export default new CheckBoxPage()