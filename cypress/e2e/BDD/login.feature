Feature: Login Automation Exercise

  Scenario: Login com sucesso
  Given que estou na página de login
  When preencho o email com "lucasqa2026@teste.com"
  And preencho a senha com "Teste@2026"
  And clico no botão de login
  Then devo ver o botão de Logout

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When preencho o email com "invalido@teste.com"
    And preencho a senha com "senhaerrada"
    And clico no botão de login
    Then devo ver uma mensagem de erro