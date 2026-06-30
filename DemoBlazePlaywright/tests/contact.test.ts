import { test, expect } from '../fixtures/baseFixtures';

test.describe('Contact', () => {

    test('Send Contact Message', async ({homePage,contactPage,page}) => {

        await homePage.navigateToDemoBlaze();

        await homePage.openContactPage();

        await expect(contactPage.contactEmail).toBeVisible();

        await contactPage.fillContactForm(
            'jagadeep@test.com',
            'Jagadeep',
            'This is a test message'
        );

        page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Thanks for the message!!');
            await dialog.accept();
        });

        await contactPage.sendMessage();
    });

});