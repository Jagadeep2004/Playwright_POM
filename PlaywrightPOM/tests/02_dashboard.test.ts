import {test,expect} from "../fixtures/baseFixtures";

import loginData from '../test-data/loginData.json';

test.describe('Dashboard Tests @dashboard',() =>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigateToWebsite();
        await loginPage.login(
            loginData['Valid Login'].username,
            loginData['Valid Login'].password
        );
    })

    test('Quick Launch',async({dashboardPage})=>{
       await expect(dashboardPage.quickLaunch).toBeVisible();
    });

    test('valid login',async({loginPage,dashboardPage})=>{
        await expect(dashboardPage.timeAtWork).toBeVisible();
    });

    test.afterEach(async({dashboardPage})=>{
        await dashboardPage.logout();
    });


});