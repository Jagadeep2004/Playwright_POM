import { test, expect } from '../fixtures/baseFixtures';
import { ExcelUtils } from '../utils/excelReader';

const testData = ExcelUtils.getTestData('./test-data/RegistrationData.xlsx','Sheet1');

test.describe('Registration', () => {

    test('Register User Using Excel Data',
        async ({ homePage, signupPage, page }) => {

        const data: any = testData[0];

        const email = "jagadeep0099@gmail.com";
            

        await homePage.navigateToAutomationExercise();

        await homePage.openSignupPage();

        await signupPage.name.fill(data.Name);
        await signupPage.email.fill(email);
        await signupPage.signupButton.click();

        await signupPage.password.fill(data.Password);

        await signupPage.firstName.fill(data.FirstName);
        await signupPage.lastName.fill(data.LastName);
        await signupPage.company.fill(data.Company);
        await signupPage.address.fill(data.Address);

        await signupPage.state.fill(data.State);
        await signupPage.city.fill(data.City);
        await signupPage.zipcode.fill(data.Zipcode.toString());
        await signupPage.mobileNumber.fill(data.Mobile.toString());

        await signupPage.createAccountButton.click();

        await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    });

});