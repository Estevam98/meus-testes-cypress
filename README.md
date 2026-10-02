# 🧪 QA Automation Portfolio

[![Cypress](https://img.shields.io/badge/Cypress-15.x-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Playwright](https://img.shields.io/badge/Playwright-1.x-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)

> Portfólio de automação de testes com foco em **E2E, regressão, cenários positivos e negativos, organização de código e execução automatizada**.

---

## 🎯 Objetivo

Este projeto reúne estudos e implementações práticas de automação de testes utilizando **Cypress, Playwright, JavaScript e TypeScript**.

A proposta é demonstrar não apenas a escrita dos testes, mas também a organização de uma suíte de automação com foco em:

- qualidade;
- legibilidade;
- manutenção;
- reutilização;
- cobertura de cenários;
- feedback rápido;
- integração com CI/CD.

---

## 🛠️ Stack

| Categoria | Tecnologia |
|---|---|
| E2E | Cypress |
| E2E | Playwright |
| Linguagens | TypeScript / JavaScript |
| CI/CD | GitHub Actions |
| Versionamento | Git / GitHub |
| Arquitetura | Page Object Model |
| Testes | Positivos / Negativos / E2E |

---

## 📂 Estrutura

```text
.
├── .github/
│   └── workflows/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── pages/
│   └── support/
│
├── playwright-tests/
│   ├── tests/
│   ├── pages/
│   └── fixtures/
│
├── cypress.config.js
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

> A estrutura apresentada representa a organização conceitual do projeto. Consulte as pastas do repositório para os arquivos atualmente implementados.

---

## ✅ Cenários implementados

### DemoQA

- Preenchimento de formulário com validação
- Validação de cenário negativo sem e-mail
- Clique em botões e validação de mensagens
- Seleção e validação de Checkbox
- Seleção e validação de Radio Button
- Seleção de opções em Select Menu

### Automation Exercise

- Cadastro de novo usuário

---

## 🧩 Boas práticas aplicadas

### Page Object Model

Seletores e ações relacionados à página são organizados em objetos próprios, reduzindo duplicação e facilitando manutenção.

### beforeEach

Fluxos comuns de preparação podem ser executados antes de cada cenário, evitando repetição desnecessária.

### TypeScript

Uso de tipagem estática na parte do projeto escrita em TypeScript.

### Organização por aplicação

Os testes são separados de acordo com o sistema/fluxo testado, facilitando navegação e manutenção.

---

## 🎭 Playwright

A configuração atual do projeto utiliza:

- execução paralela;
- retry em CI;
- HTML Reporter;
- trace na primeira tentativa de um teste que falhar;
- execução em Chromium;
- execução em Firefox;
- execução em WebKit.

Essas configurações permitem explorar uma abordagem de automação cross-browser e gerar evidências para investigação de falhas.

---

## 🚀 Execução

### 1. Clone

```bash
git clone https://github.com/Estevam98/meus-testes-cypress.git
cd meus-testes-cypress
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Cypress

Abrir a interface:

```bash
npx cypress open
```

Executar via terminal:

```bash
npx cypress run
```

### 4. Playwright

Executar os testes:

```bash
npx playwright test
```

Abrir o relatório:

```bash
npx playwright show-report
```

---

## 🔄 CI/CD

O projeto possui estrutura para execução automatizada através do **GitHub Actions**.

A intenção do pipeline é transformar a suíte de testes em um mecanismo de feedback rápido após alterações no código.

```text
Push / Pull Request
        ↓
GitHub Actions
        ↓
Install dependencies
        ↓
Run automated tests
        ↓
Collect results
        ↓
Feedback
```

---

## 🧠 Estratégia de testes demonstrada

```text
                Test Strategy
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
   Positive        Negative         E2E
   Scenarios      Scenarios        Flows
       │              │              │
       └──────────────┼──────────────┘
                      ↓
                Automation
                      ↓
                   CI/CD
```

---

## 📌 Próximas evoluções

- [ ] Ampliar cobertura E2E
- [ ] Expandir cenários negativos
- [ ] Evoluir cobertura com Playwright
- [ ] Adicionar testes de API
- [ ] Melhorar geração de evidências
- [ ] Expandir execução em CI/CD
- [ ] Adicionar documentação de estratégia de testes

---

## 👨‍💻 Autor

**Lucas Estevam**

QA Engineer | Test Automation | Quality Assurance

📍 São Paulo, Brasil

[LinkedIn](https://www.linkedin.com/in/lucasestevam-qa/) · [GitHub](https://github.com/Estevam98)
