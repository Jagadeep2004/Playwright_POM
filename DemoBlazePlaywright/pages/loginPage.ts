import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login_button: Locator;
    readonly welcomeUser: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.login_button = page.locator("//button[text()='Log in']");
        this.welcomeUser = page.locator("#nameofuser");
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_button.click();
    }
}