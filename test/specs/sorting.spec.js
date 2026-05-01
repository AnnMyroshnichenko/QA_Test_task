import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';
import { step } from '../utils/allure.steps.js';
import { feature, story, severity } from '../utils/allure.meta.js';

describe('Sorting Feature', () => {

    beforeEach(async () => {

        feature('Sorting');
        severity('normal');

        await step('Open login page', async () => {
            await LoginPage.open();
        });

        await step('Login with valid user', async () => {
            await LoginPage.login('standard_user', 'secret_sauce');
        });

    });

    it('TC6: Sort by price low to high', async () => {

        story('Sort by price (low to high)');

        await step('Apply LOHI sorting', async () => {
            await InventoryPage.sortBy('lohi');
        });

        await step('Validate price order ascending', async () => {
            const prices = await InventoryPage.getItemPrices();
            const sorted = [...prices].sort((a, b) => a - b);

            expect(prices).toEqual(sorted);
        });

    });

    it('TC6: Sort by price high to low', async () => {

        story('Sort by price (high to low)');

        await step('Apply HILO sorting', async () => {
            await InventoryPage.sortBy('hilo');
        });

        await step('Validate price order descending', async () => {
            const prices = await InventoryPage.getItemPrices();
            const sorted = [...prices].sort((a, b) => b - a);

            expect(prices).toEqual(sorted);
        });

    });

    it('TC6: Sort by name A-Z', async () => {

        story('Sort by name A-Z');

        await step('Apply AZ sorting', async () => {
            await InventoryPage.sortBy('az');
        });

        await step('Validate alphabetical order', async () => {
            const names = await InventoryPage.getItemNames();
            const sorted = [...names].sort();

            expect(names).toEqual(sorted);
        });

    });

    it('TC6: Sort by name Z-A', async () => {

        story('Sort by name Z-A');

        await step('Apply ZA sorting', async () => {
            await InventoryPage.sortBy('za');
        });

        await step('Validate reverse alphabetical order', async () => {
            const names = await InventoryPage.getItemNames();
            const sorted = [...names].sort().reverse();

            expect(names).toEqual(sorted);
        });

    });

});