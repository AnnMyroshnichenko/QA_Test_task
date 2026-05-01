import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Footer Links Feature', () => {

    let initialHandles;

    beforeEach(async () => {

        feature('UI Links');
        severity('minor');

        await step('Open login page', async () => {
            await LoginPage.open();
        });

        await step('Login with valid user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

    });

    it('TC7: Twitter link opens in new tab', async () => {

        story('Twitter link navigation');

        await step('Get initial browser tabs', async () => {
            initialHandles = await browser.getWindowHandles();
        });

        await step('Click Twitter link', async () => {
            await InventoryPage.clickTwitter();
        });

        await step('Verify new tab opened', async () => {
            const newHandles = await browser.getWindowHandles();
            expect(newHandles.length).toBeGreaterThan(initialHandles.length);
        });

    });

    it('TC7: Facebook link opens in new tab', async () => {

        story('Facebook link navigation');

        await step('Get initial browser tabs', async () => {
            initialHandles = await browser.getWindowHandles();
        });

        await step('Click Facebook link', async () => {
            await InventoryPage.clickFacebook();
        });

        await step('Verify new tab opened', async () => {
            const newHandles = await browser.getWindowHandles();
            expect(newHandles.length).toBeGreaterThan(initialHandles.length);
        });

    });

    it('TC7: LinkedIn link opens in new tab', async () => {

        story('LinkedIn link navigation');

        await step('Get initial browser tabs', async () => {
            initialHandles = await browser.getWindowHandles();
        });

        await step('Click LinkedIn link', async () => {
            await InventoryPage.clickLinkedin();
        });

        await step('Verify new tab opened', async () => {
            const newHandles = await browser.getWindowHandles();
            expect(newHandles.length).toBeGreaterThan(initialHandles.length);
        });

    });

});