import SelectMenuPage from '../../pages/demoqa/SelectMenuPage'

describe('DemoQA - Select Menu', () => {
  beforeEach(() => {
    SelectMenuPage.visit()
  })

  it('deve selecionar uma opção no dropdown', () => {
    SelectMenuPage.buttonSelectValue()
    SelectMenuPage.selectOption()
    SelectMenuPage.checkMessage()
  })
})