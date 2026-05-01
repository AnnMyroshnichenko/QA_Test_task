import BasePage from './base.page.js';

class InventoryPage extends BasePage {
    get inventoryContainer() { return $('.inventory_list'); }
    get items() { return $$('.inventory_item'); }

    get cartIcon() { return $('.shopping_cart_link'); }
    get cartBadge() { return $('.shopping_cart_badge'); }

    get burgerMenu() { return $('#react-burger-menu-btn'); }
    get logoutBtn() { return $('#logout_sidebar_link'); }

    get sortDropdown() { return $('.product_sort_container'); }

    get footerTwitter() { return $('.social_twitter'); }
    get footerFacebook() { return $('.social_facebook'); }
    get footerLinkedin() { return $('.social_linkedin'); }

    async isPageOpened() {
        return await this.isDisplayed(this.inventoryContainer);
    }

    async addFirstItemToCart() {
        const btn = await $('.inventory_item button');
        await this.click(btn);
    }

    async getCartCount() {
        if (await this.cartBadge.isExisting()) {
            return await this.cartBadge.getText();
        }
        return '0';
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

        for (const el of elements) {
            result.push(await el.getText());
        }

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

    async clickTwitter() {
        await this.click(this.footerTwitter);
    }

    async clickFacebook() {
        await this.click(this.footerFacebook);
    }

    async clickLinkedin() {
        await this.click(this.footerLinkedin);
    }
}

export default new InventoryPage();