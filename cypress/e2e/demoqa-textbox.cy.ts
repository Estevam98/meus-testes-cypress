import TextBoxPage from '../pages/TextBoxPage'
import ButtonsPage from '../pages/ButtonsPage'
import CheckboxPage from '../pages/CheckboxPage'
import RadioButtonPage from '../pages/RadioButtonPage'

describe('DemoQA - Text Box', () => {
  beforeEach(() => {
    TextBoxPage.visit()
  })

  it('deve preencher o formulário com Page Object', () => {
    TextBoxPage.fillName('Lucas Estevam')
    TextBoxPage.fillEmail('lucas@teste.com')
    TextBoxPage.submit()
    cy.get('#name').should('contain', 'Lucas Estevam')
  })

  it('Formulário sem o Email', () => {
    cy.get('#userName').type('Lucas Estevam')
    cy.get('#currentAddress').type('Isso é um teste')
    cy.get('#permanentAddress').type('Isso realmente é um teste')
    cy.get('#submit').click()
    cy.get('.border').should('not.include.text', 'Email')
  })
})

describe('DemoQA - Outros testes', () => {
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
    RadioButtonPage.visit()
    RadioButtonPage.buttonYes()
    RadioButtonPage.checkMessage()
  })
})