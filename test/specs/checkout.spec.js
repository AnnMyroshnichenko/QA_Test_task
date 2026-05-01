import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import CartPage from '../pages/cart.page.js';
import CheckoutPage from '../pages/checkout.page.js';

import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Checkout Feature', () => {

    it('TC8: Valid checkout flow', async () => {

        feature('Checkout');
        story('Valid checkout flow');
        severity('critical');

        await step('Open login page', async () => {
            await LoginPage.open();
        });

        await step('Login with valid user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

        await step('Add product to cart', async () => {
            await InventoryPage.addFirstItemToCart();
        });

        await step('Open cart', async () => {
            await InventoryPage.openCart();
        });

        await step('Start checkout process', async () => {
            await CartPage.startCheckout();
        });

        await step('Fill checkout form', async () => {
            await CheckoutPage.fillForm('Test', 'User', '12345');
        });

        await step('Continue to overview', async () => {
            await CheckoutPage.continue();
        });

        await step('Verify overview page is displayed', async () => {
            await expect(CheckoutPage.overviewContainer).toBeDisplayed();
        });

        await step('Finish order', async () => {
            await CheckoutPage.finish();
        });

        await step('Verify success message', async () => {
            await expect(CheckoutPage.successMessage)
                .toHaveText(expect.stringContaining('Thank you'));
        });

        await step('Return to home page', async () => {
            await CheckoutPage.backHome();
        });

        await step('Verify inventory page is visible', async () => {
            await expect(InventoryPage.inventoryContainer).toBeDisplayed();
        });

    });

    it('TC9: Checkout without products', async () => {

        feature('Checkout');
        story('Empty cart checkout');
        severity('minor');

        await step('Open login page', async () => {
            await LoginPage.open();
        });

        await step('Login with valid user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

        await step('Open cart', async () => {
            await InventoryPage.openCart();
        });

        await step('Verify cart is empty', async () => {
            expect(await CartPage.getItemsCount()).toBe(0);
        });

    });

});