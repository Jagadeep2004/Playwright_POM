import { Page, Locator } from '@playwright/test';

export class ContactPage {
    readonly page: Page;
    readonly contactEmail: Locator;
    readonly contactName: Locator;
    readonly contactMessage: Locator;
    readonly sendMessageButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.contactEmail = page.locator('#recipient-email');
        this.contactName = page.locator('#recipient-name');
        this.contactMessage = page.locator('#message-text');
        this.sendMessageButton = page.locator('//button[text()="Send message"]');
    }

    async fillContactForm(email: string,name: string,message: string) {
        await this.contactEmail.fill(email);
        await this.contactName.fill(name);
        await this.contactMessage.fill(message);
    }

    async sendMessage() {
        await this.sendMessageButton.click();
    }
}