import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import CartPage from '../pages/cart.page.js';
import CheckoutPage from '../pages/checkout.page.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Checkout Feature', () => {

    it('TC8: Valid checkout flow', async () => {

        feature('Checkout');
        story('Valid checkout flow');
        severity('critical');

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.addFirstItemToCart();
        await InventoryPage.openCart();

        await CartPage.startCheckout();
        
        await CheckoutPage.fillForm('Test', 'User', '12345');
        await CheckoutPage.continue();
        
        await expect(CheckoutPage.overviewContainer).toBeDisplayed();
        
        await CheckoutPage.finish();
        
        await expect(CheckoutPage.successMessage)
                .toHaveText(expect.stringContaining('Thank you'));
     
        await CheckoutPage.backHome();
      
        await expect(InventoryPage.inventoryContainer).toBeDisplayed();

    });

    it('TC9: Checkout without products', async () => {
            await loginPage.open();
            await loginPage.login('standard_user', 'secret_sauce');

            await inventoryPage.openCart();
            await cartPage.startCheckout();

            await expect($('.error-message-container'))
                .toBeDisplayed();
    });     
});