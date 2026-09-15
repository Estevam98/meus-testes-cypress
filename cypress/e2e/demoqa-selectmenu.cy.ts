import SelectMenuPage from '../pages/SelectMenuPage'

describe('DemoQA - Select Menu', () => {
  it('deve selecionar uma opção no dropdown', () => {
    SelectMenuPage.visit()
    SelectMenuPage.buttonSelectValue()
    SelectMenuPage.selectOption()
    SelectMenuPage.checkMessage()
  })
})