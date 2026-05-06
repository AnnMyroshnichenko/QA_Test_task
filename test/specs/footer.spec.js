import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';

describe('Footer Links', () => {

    const links = ['twitter', 'facebook', 'linkedin'];

    links.forEach(link => {

        it(`TC7: ${link} opens new tab`, async () => {
            await loginPage.open();
            await loginPage.login('standard_user', 'secret_sauce');

            const opened = await inventoryPage.openSocialLink(link);

            expect(opened).toBe(true);
        });

    });

});