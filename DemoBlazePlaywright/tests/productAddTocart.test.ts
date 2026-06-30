import { test, expect } from '../fixtures/baseFixtures';

test.describe('Add Product To Cart', () => {

    test('Add Samsung Galaxy S6 to cart', async ({homePage,productPage,page}) => {

        await homePage.navigateToDemoBlaze();

        await homePage.openSamsungGalaxyS6();

        page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Product added');
            await dialog.accept();
        });

        await productPage.addToCart();
    });
});