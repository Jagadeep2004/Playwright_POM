import {test,expect} from "../fixtures/baseFixtures";

import loginData from '../test-data/loginData.json';

test.describe('Dashboard Tests @logout',() =>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigateToWebsite();
        await loginPage.login(
            loginData['Valid Login'].username,
            loginData['Valid Login'].password
        );
    })

    test('Quick Launch',async({dashboardPage,loginPage})=>{
        await dashboardPage.logout();
        await expect(loginPage.loginTitle).toBeVisible();
    });


});