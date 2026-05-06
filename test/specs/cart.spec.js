import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import CartPage from '../pages/cart.page.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Cart Feature', () => {

    it('TC5: Cart persists after logout', async () => {

        feature('Cart');
        story('Cart persistence after logout');
        severity('critical');

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.addFirstItemToCart();
       
        await expect(InventoryPage.cartBadge).toHaveText('1');
        
        await InventoryPage.logout();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.openCart();
        
        expect(await CartPage.getItemsCount()).toBeGreaterThan(0);
    });

});