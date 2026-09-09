class TextBoxPage {
  visit() {
    cy.visit('https://demoqa.com/text-box')
  }

  fillName(name: string) {
    cy.get('#userName').type(name)
  }

  fillEmail(email: string) {
    cy.get('#userEmail').type(email)
  }

  submit() {
    cy.get('#submit').click()
  }
}

export default new TextBoxPage()