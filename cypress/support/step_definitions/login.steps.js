import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("https://automationexercise.com/login");
});

When("preencho o email com {string}", (email) => {
  cy.get("[data-qa='login-email']").type(email);
});

When("preencho a senha com {string}", (senha) => {
  cy.get("[data-qa='login-password']").type(senha);
});

When("clico no botão de login", () => {
  cy.get("[data-qa='login-button']").click();
});

Then("devo ver o botão de Logout", () => {
  cy.get('a').filter(':contains("Logout")').should('exist')
});

Then("devo ver uma mensagem de erro", () => {
  cy.get('[style="color: red;"]').should("be.visible");
});