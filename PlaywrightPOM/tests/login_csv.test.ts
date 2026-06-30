import {test,expect} from "../fixtures/baseFixtures";

import {readLoginData,LoginUser} from "../utils/csvReader";

const users:LoginUser[] = readLoginData();

const validUser = users.find(user => user.type === 'valid');
const invalidUser = users.find(user => user.type === 'invalid');

test.describe('Login Test Using CSV', () =>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigateToWebsite();
    });

    test('valid login',async({loginPage,dashboardPage})=>{
        if(!validUser){
            throw new Error('not found valid user');
        }

        await loginPage.login(validUser.username,validUser.password);
        await expect(dashboardPage.dashboardTitle).toBeVisible();
    })

    test('invalid login',async({loginPage})=>{
        if(!invalidUser){
            throw new Error('not found valid user');
        }
        await loginPage.login(invalidUser.username,invalidUser.password);
        await expect(loginPage.errorMessage).toBeVisible();
    })
})