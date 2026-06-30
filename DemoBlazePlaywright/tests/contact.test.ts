import { test, expect } from '../fixtures/baseFixtures';
import { ContactData, readContactData} from '../utils/csv_Reader';

const contacts : ContactData[] = readContactData()

contacts.forEach((datas) => {
test.describe('contactTest', () => {
    test(datas.testname, async ({homePage,contactPage,page}) => {
        await homePage.navigateToDemoBlaze()
        await homePage.openContactPage()
        await expect(contactPage.contactEmail).toBeVisible()
        await contactPage.fillContactForm(
            datas.email,
            datas.name,
            datas.message
        )
        page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Thanks for the message!!')
            await dialog.accept()
        })
        await contactPage.sendMessage()
    })
})
})