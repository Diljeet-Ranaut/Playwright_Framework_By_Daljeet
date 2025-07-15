
import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async completeCheckout() {
    await this.page.click('#checkout');
    await this.page.fill('#first-name', 'Daljeet');
    await this.page.fill('#last-name', 'Singh');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
    await this.page.click('#finish');
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
