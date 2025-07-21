import { Page, Locator } from '@playwright/test';
import { locators } from '../utils/locators';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addRandomItemsToCart(count: number) {
    const items = await this.page.locator(locators.inventory.itemAddToCart).all();
    const selected = items.slice(0, count);
    for (const item of selected) await item.click();
  }

  async proceedToCheckout() {
    await this.page.click(locators.inventory.cartIcon);
    await this.page.click(locators.checkout.checkoutBtn);
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill(locators.checkout.firstName, firstName);
    await this.page.fill(locators.checkout.lastName, lastName);
    await this.page.fill(locators.checkout.zipCode, zip);
    await this.page.click(locators.checkout.continueBtn);
  }

  async completePurchase() {
    await this.page.click(locators.checkout.finishBtn);
  }

  get confirmationMessage(): Locator {
    return this.page.locator(locators.checkout.completeHeader);
  }
}
