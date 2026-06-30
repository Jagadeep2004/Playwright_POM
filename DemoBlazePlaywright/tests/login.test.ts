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

    });
});