import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Logout Feature', () => {

    it('TC4: Logout', async () => {

        feature('Authentication');
        story('Logout');
        severity('normal');

        await step('Open login page', async () => {
            await LoginPage.open();
        });

        await step('Login with valid user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

        await step('Logout from application', async () => {
            await InventoryPage.logout();
        });

        await step('Verify login button is visible', async () => {
            await expect(LoginPage.loginBtn).toBeDisplayed();
        });

        await step('Verify login form is reset', async () => {
            expect(await LoginPage.areFieldsEmpty()).toBe(true);
        });

    });

});