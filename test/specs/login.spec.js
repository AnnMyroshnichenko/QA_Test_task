import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Login Feature', () => {

    beforeEach(async () => {
        feature('Authentication');
        severity('critical');

        await step('Open login page', async () => {
            await LoginPage.open();
        });
    });

    it('TC1: Valid login', async () => {

        story('Valid Login');

        await step('Login with valid credentials', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

        await step('Verify inventory page is displayed', async () => {
            await expect(InventoryPage.inventoryContainer).toBeDisplayed();
        });

    });

    it('TC2: Invalid password', async () => {

        story('Invalid password login');

        await step('Login with wrong password', async () => {
            await LoginPage.login('standard_user', 'wrong_password');
        });

        await step('Verify error message', async () => {
            await expect(LoginPage.error).toBeDisplayed();
            await expect(LoginPage.error)
                .toHaveText(expect.stringContaining('Username and password do not match'));
        });

        await step('Verify UI error indicators', async () => {
            expect(await LoginPage.areErrorIconsVisible()).toBe(true);
            expect(await LoginPage.areFieldsHighlighted()).toBe(true);
        });

    });

    it('TC3: Locked user', async () => {

        story('Locked user login');

        await step('Login as locked user', async () => {
            await LoginPage.login('locked_out_user', 'secret_sauce');
        });

        await step('Verify locked out message', async () => {
            await expect(LoginPage.error)
                .toHaveText(expect.stringContaining('locked out'));
        });

    });

});