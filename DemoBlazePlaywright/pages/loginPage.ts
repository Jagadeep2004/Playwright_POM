import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("//*[@id='loginusername']");
        this.password = page.locator("//*[@id='loginpassword']");
        this.login_button = page.locator("//*[@id='logInModal']/div/div/div[3]/button[2]");
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login_button.click();
    }
}