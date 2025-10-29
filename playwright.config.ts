import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  // Timeouts
  timeout: 120000, // 2 minutos por test
  expect: {
    timeout: 10000, // 10 segundos para expects
  },
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 2,
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    headless: true,
    baseURL: 'https://www.segurosbolivar.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
