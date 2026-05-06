import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Logout Feature', () => {

    it('TC4: Logout', async () => {

        feature('Authentication');
        story('Logout');
        severity('normal');

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.logout();

        await expect(LoginPage.loginBtn).toBeDisplayed();
        expect(await LoginPage.areFieldsEmpty()).toBe(true);
    });

});