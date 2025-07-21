import { Page, Locator } from '@playwright/test';
import { locators } from '../utils/locators.ts';

export class LoginPage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = page.locator(locators.login.username);
    this.passwordInput = page.locator(locators.login.password);
    this.loginButton = page.locator(locators.login.loginBtn);
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
