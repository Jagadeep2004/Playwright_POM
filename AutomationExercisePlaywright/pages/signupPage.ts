import { Page, Locator } from '@playwright/test';

export class SignupPage {

    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly signupButton: Locator;
    readonly password: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.name = page.locator("[data-qa='signup-name']");
        this.email = page.locator("[data-qa='signup-email']");
        this.signupButton = page.locator("[data-qa='signup-button']");

        this.password = page.locator("#password");
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address = page.locator("#address1");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobileNumber = page.locator("#mobile_number");

        this.createAccountButton = page.locator("[data-qa='create-account']");
    }
}