import { test, expect } from '@playwright/test';



test("Test automatizado - Caso 2413", async ({ page, }) => {

  await test.step("Abrir portal de Seguros Bolívar", async () => {
    await page.goto("https://www.segurosbolivar.com/");
  });

  await test.step("Abrir menú de Trámites", async () => {
    await page.getByRole("button", { name: "Trámites " }).click();
  });
    
  });


