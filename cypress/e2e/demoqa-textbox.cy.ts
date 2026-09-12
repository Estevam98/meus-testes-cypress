import TextBoxPage from '../pages/TextBoxPage'
import ButtonsPage from '../pages/ButtonsPage'
import CheckboxPage from '../pages/CheckboxPage'

describe('DemoQA - Testes E2E', () => {

  it('deve preencher o formulário com Page Object', () => {
    TextBoxPage.visit()
    TextBoxPage.fillName('Lucas Estevam')
    TextBoxPage.fillEmail('lucas@teste.com')
    TextBoxPage.submit()
    cy.get('#name').should('contain', 'Lucas Estevam')
  })

  it('deve clicar no botão e ver a mensagem', () => {
    ButtonsPage.visit()
    ButtonsPage.buttonClickMe()
    ButtonsPage.checkMessage()
  })

  it('deve marcar um checkbox e verificar o estado', () => {
    CheckboxPage.visit()
    CheckboxPage.selectHome()
    CheckboxPage.checkMessage()
  })

  it('deve clicar no radio button e verificar a mensagem', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('#yesRadio').click({force: true})
    cy.get('.text-success').should('contain', 'Yes')
  })

})