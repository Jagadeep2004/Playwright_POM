import {test,expect} from "../fixtures/baseFixtures";

import loginData from '../test-data/loginData.json';

test.describe('Login Tests @login',() =>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigateToWebsite();
    })

    test('invalid login',async({loginPage})=>{
        await loginPage.login(
            loginData['Invalid Login'].username,
            loginData['Invalid Login'].password
        );

       await expect(loginPage.errorMessage).toBeVisible;
    })

    test('valid login',async({loginPage,dashboardPage})=>{
        await loginPage.login(
            loginData["Valid Login"].username,
            loginData["Valid Login"].password
        );

        await expect(dashboardPage.dashboardTitle).toBeVisible();
    });


});