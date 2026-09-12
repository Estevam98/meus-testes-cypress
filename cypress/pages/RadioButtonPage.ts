class RadioButtonPage {
  visit() {
    cy.visit('https://demoqa.com/radio-button')
  }

  buttonYes() {
    cy.get('#yesRadio').click({force: true})
  }

  checkMessage() {
  cy.contains('You have selected Yes').should('be.visible')
}
}

export default new RadioButtonPage()