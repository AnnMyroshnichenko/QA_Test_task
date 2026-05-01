import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import CartPage from '../pages/cart.page.js';

import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Cart Feature', () => {

    it('TC5: Cart persists after logout', async () => {

        feature('Cart');
        story('Cart persistence after logout');
        severity('critical');

        await step('Open login page', async () => {
            await LoginPage.open();
        });

        await step('Login with valid user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

        await step('Add first item to cart', async () => {
            await InventoryPage.addFirstItemToCart();
        });

        await step('Verify cart badge equals 1', async () => {
            await expect(InventoryPage.cartBadge).toHaveText('1');
        });

        await step('Logout from application', async () => {
            await InventoryPage.logout();
        });

        await step('Login again with same user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

        await step('Open cart', async () => {
            await InventoryPage.openCart();
        });

        await step('Verify cart is not empty', async () => {
            expect(await CartPage.getItemsCount()).toBeGreaterThan(0);
        });

    });

});