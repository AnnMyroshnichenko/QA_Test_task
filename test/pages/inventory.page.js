import basePage from './base.page.js';

class inventoryPage extends basePage {
    get inventoryContainer() { return $('.inventory_list'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    get cartBadge() { return $('.shopping_cart_badge'); }

    get burgerMenu() { return $('#react-burger-menu-btn'); }
    get logoutBtn() { return $('#logout_sidebar_link'); }

    get sortDropdown() { return $('.product_sort_container'); }

    get socialLinks() {
        return {
            twitter: $('.social_twitter'),
            facebook: $('.social_facebook'),
            linkedin: $('.social_linkedin')
        };
    }

    async addFirstItemToCart() {
        await this.click($('.inventory_item button'));
    }

    async openCart() {
        await this.click(this.cartIcon);
    }

    async logout() {
        await this.click(this.burgerMenu);
        await this.logoutBtn.waitForDisplayed();
        await this.click(this.logoutBtn);
    }

    async sortBy(value) {
        await this.sortDropdown.selectByAttribute('value', value);
    }

    async getItemNames() {
        const elements = await $$('.inventory_item_name');
        const result = [];
        for (const el of elements) result.push(await el.getText());
        return result;
    }

    async getItemPrices() {
        const elements = await $$('.inventory_item_price');
        const result = [];
        for (const el of elements) {
            const text = await el.getText();
            result.push(parseFloat(text.replace('$', '')));
        }
        return result;
    }

    async openSocialLink(name) {
        const initial = await browser.getWindowHandles();

        await this.click(this.socialLinks[name]);

        const updated = await browser.getWindowHandles();

        return updated.length > initial.length;
    }
}

export default new inventoryPage();