import { Page, Locator } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly signupLoginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupLoginLink = page.locator("//a[contains(text(),'Signup / Login')]");
    }

    async navigateToAutomationExercise() {
        await this.page.goto("https://automationexercise.com/");
    }

    async openSignupPage() {
        await this.signupLoginLink.click();
    }
}