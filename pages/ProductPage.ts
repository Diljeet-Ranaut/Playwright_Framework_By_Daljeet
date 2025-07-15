
import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addRandomItems(count: number) {
    const items = await this.page.locator('.inventory_item').all();
    const selected = items.sort(() => 0.5 - Math.random()).slice(0, count);
    for (const item of selected) {
      await item.locator('button').click();
    }
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
