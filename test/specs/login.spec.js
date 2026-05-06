import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Login Feature', () => {

    beforeEach(async () => {
        feature('Authentication');
        severity('critical');

        await LoginPage.open();
    });

    it('TC1: Valid login', async () => {

        story('Valid Login');

        await LoginPage.login('standard_user', 'secret_sauce');
        
        await expect(InventoryPage.inventoryContainer).toBeDisplayed();
    });

    it('TC2: Invalid password', async () => {

        story('Invalid password login');

        await LoginPage.login('standard_user', 'wrong_password');
        await expect(LoginPage.error).toBeDisplayed();
        
        await expect(LoginPage.error)
                .toHaveText(expect.stringContaining('Username and password do not match'));

        expect(await LoginPage.areErrorIconsVisible()).toBe(true);
        expect(await LoginPage.areFieldsHighlighted()).toBe(true);

    });

    it('TC3: Locked user', async () => {

        story('Locked user login');

        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.error)
                .toHaveText(expect.stringContaining('locked out'));

    });

});