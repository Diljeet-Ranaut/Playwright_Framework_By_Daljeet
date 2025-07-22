import { Page } from "@playwright/test";
import { locators } from "../utils/locators"; // adjust path as needed
import { testData } from "../utils/testData";
export class ProductPage {
  readonly page: Page;

  // Test data
  readonly defaultQuantity: number = testData.checkout.numberOfItems;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(quantity?: number) {
    const qty = quantity ?? this.defaultQuantity;
    await this.page.click(locators.inventory.itemAddToCart);
    await this.page.click(locators.inventory.cartIcon);
  }
}
