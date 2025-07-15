import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('SauceLabs full checkout with 3 random items', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  // ✅ Login and assert navigation success
  await login.login();
  await expect(page.locator('.title')).toHaveText('Products');

  // ✅ Add items and assert cart badge is 3
  await products.addRandomItems(3);
  const cartCount = await page.locator('.shopping_cart_badge').innerText();
  expect(Number(cartCount)).toBe(3);

  // ✅ Go to cart and complete checkout
  await products.goToCart();
  await checkout.completeCheckout();

  // ✅ Assert final confirmation message
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
