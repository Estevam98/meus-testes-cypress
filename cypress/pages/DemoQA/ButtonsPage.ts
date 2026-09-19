class ButtonsPage {
  visit() {
    cy.visit('https://demoqa.com/buttons')
  }

  buttonClickMe() {
    cy.get('.btn-primary').eq(2).click({force: true})
  }

  checkMessage() {
  cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click')
}
}

export default new ButtonsPage()