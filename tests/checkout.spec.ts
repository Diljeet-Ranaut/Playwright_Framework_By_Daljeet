import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductPage } from '../pages/ProductPage';
import { testData } from '../utils/testData';

test.describe('E2E Checkout Flow', () => {
  let loginPage: LoginPage;
  let checkoutPage: CheckoutPage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login(
      testData.validUser.username,
      testData.validUser.password
    );
  });

  test('should complete checkout with selected items', async ({ page }) => {
    await productPage.addProductToCart(); // Uses defaultQuantity from testData

    await checkoutPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInfo(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.zipCode
    );

    await checkoutPage.completePurchase();

    await expect(page).toHaveURL(testData.checkout.successUrlPattern);
    await expect(checkoutPage.confirmationMessage).toContainText(
      testData.checkout.successMessage
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
