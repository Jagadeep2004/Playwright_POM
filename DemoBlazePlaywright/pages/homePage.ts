import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly contactLink: Locator;
    readonly samsungGalaxyS6: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginLink = page.locator('#login2');
        this.contactLink = page.locator('//a[text()="Contact"]');
        this.samsungGalaxyS6 = page.locator('//a[text()="Samsung galaxy s6"]');
    }

    async navigateToDemoBlaze() {
        await this.page.goto('https://www.demoblaze.com/index.html#');
    }

    async openContactPage() {
        await this.contactLink.click();
    }

    async openSamsungGalaxyS6() {
        await this.samsungGalaxyS6.click();
    }
}