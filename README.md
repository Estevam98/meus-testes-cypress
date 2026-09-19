# Meus Testes - Cypress

Projeto de automação de testes E2E desenvolvido com Cypress e TypeScript, seguindo boas práticas como Page Object Model e organização por sistema testado.

## 🛠 Stack

- Cypress
- TypeScript
- JavaScript
- Git & GitHub

## 📁 Estrutura do Projeto

## ✅ Testes implementados

### DemoQA
- Preenchimento de formulário com validação
- Formulário sem e-mail (cenário negativo)
- Clique em botões e validação de mensagem
- Checkbox — seleção e validação
- Radio Button — seleção e validação
- Select Menu — seleção de opção em dropdown

### Automation Exercise
- Cadastro de novo usuário

## 📐 Boas práticas aplicadas

- **Page Object Model** — seletores e ações organizados por página
- **beforeEach** — evita repetição do `cy.visit` entre testes
- **TypeScript** — tipagem estática para detecção de erros antes de rodar
- **Organização por sistema** — cada sistema testado em sua própria pasta

## ▶️ Como rodar

Clone o repositório:

```bash
git clone https://github.com/Estevam98/meus-testes-cypress.git
```

Instale as dependências:

```bash
npm install
```

Abra o Cypress:

```bash
npx cypress open
```

## 👨‍💻 Autor

**Lucas Estevam da Silva**
QA Engineer | Cypress | TypeScript | Postman | GitHub Actions

[LinkedIn](https://linkedin.com/in/lucas-estevam-qa) | [GitHub](https://github.com/Estevam98)
