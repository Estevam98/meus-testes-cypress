class SelectMenuPage {
  visit() {
    cy.visit('https://demoqa.com/select-menu')
  }

  buttonSelectValue() {
    cy.get('#withOptGroup').click()
  }

selectOption() {
  cy.get('#react-select-2-option-1-0').click()
}

  checkMessage() {
  cy.get('#withOptGroup').should('contain', 'Group 2, option 1')
}
}

export default new SelectMenuPage()