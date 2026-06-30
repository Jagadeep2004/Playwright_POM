import{test,expect} from '../fixtures/baseFixtures'

import LoginData from "../test-data/loginData.json"

test.describe("Login",()=>{
    test("valid login",async({homePage,loginPage})=>{
        await homePage.navigateToDemoBlaze();
        await homePage.loginLink.click();

        await loginPage.login(
            LoginData.valid.username,
            LoginData.valid.password
        );
        
        await expect(loginPage.welcomeUser).toContainText(LoginData.valid.username);

    });

    test("invalid login", async ({ homePage, loginPage, page }) => {

        await homePage.navigateToDemoBlaze();
        await homePage.loginLink.click();

        page.once("dialog", async dialog => {
            expect(dialog.message()).toBe("Wrong password.");
            await dialog.accept();
        });

        await loginPage.login(
            LoginData.invalid.username,
            LoginData.invalid.password
        );
    });
});