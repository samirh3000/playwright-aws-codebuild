import { test, expect } from '@playwright/test';

test('Validar botón Acceso a Clientes en Seguros Bolívar', async ({ page }) => {
  await page.goto('/');
  const boton = page.getByRole('link', { name: /Acceso a clientes/i });
  await expect(boton).toBeVisible();
});
