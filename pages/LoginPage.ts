
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string = process.env.SAUCE_USERNAME!, password: string = process.env.SAUCE_PASSWORD!) {
    if (!username || !password) {
      throw new Error('Missing login credentials! Please set SAUCE_USERNAME and SAUCE_PASSWORD in .env');
    }
    await this.page.goto('https://www.saucedemo.com');
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
