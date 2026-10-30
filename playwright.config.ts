import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // expect fica no nível de cima, fora do use
  expect: { timeout: 10_000 },

  // um único use, com todas as opções no primeiro nível
  use: {
    baseURL: 'https://automationexercise.com',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] },  timeout: 60000 },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] }, timeout: 60000 },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] },  timeout: 60000 },
  ],
});