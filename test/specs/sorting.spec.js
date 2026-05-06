import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';

describe('Sorting Feature', () => {

    const cases = [
        { name: 'price low to high', value: 'lohi', compare: (a,b) => a - b, type: 'price' },
        { name: 'price high to low', value: 'hilo', compare: (a,b) => b - a, type: 'price' },
        { name: 'name A-Z', value: 'az', compare: undefined, type: 'name' },
        { name: 'name Z-A', value: 'za', compare: undefined, type: 'name', reverse: true }
    ];

    cases.forEach(tc => {

        it(`TC6: ${tc.name}`, async () => {
            await loginPage.open();
            await loginPage.login('standard_user', 'secret_sauce');

            await inventoryPage.sortBy(tc.value);

            let data = tc.type === 'price'
                ? await inventoryPage.getItemPrices()
                : await inventoryPage.getItemNames();

            let sorted = [...data].sort(tc.compare);

            if (tc.reverse) sorted.reverse();

            expect(data).toEqual(sorted);
        });

    });

});