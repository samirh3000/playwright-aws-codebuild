import { test, expect } from '@playwright/test';



test("Test automatizado - Caso 2413", async ({ page, }) => {

  await test.step("Abrir portal de Seguros Bolívar", async () => {
    await page.goto("https://www.segurosbolivar.com/");
  });

  await test.step("Abrir menú de Trámites", async () => {
    await page.getByRole("button", { name: "Trámites " }).click();
  });
    const indemnizaciones = page.locator("#webComponentHeader").getByText("Indemnizaciones");
    await indemnizaciones.waitFor({ state: "visible" });
    await indemnizaciones.click();
    await page
      .getByText("SOLICITE SUS INDEMNIZACIONES FÁCIL Y RÁPIDO")
      .first()
      .waitFor({ state: "visible" });
  });

  
  test('Validar botón Acceso a Clientes en Seguros Bolívar', async ({ page }) => {
  await page.goto('/');
  const boton = page.getByRole('link', { name: /Acceso a clientes/i });
  await expect(boton).toBeVisible();
});