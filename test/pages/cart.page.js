import BasePage from './base.page.js';

class CartPage extends BasePage {
    get cartItems() { return $$('.cart_item'); }
    get checkoutBtn() { return $('#checkout'); }

    async isCartEmpty() {
        return (await this.cartItems.length) === 0;
    }

    async getItemsCount() {
        return await this.cartItems.length;
    }

    async startCheckout() {
        await this.click(this.checkoutBtn);
    }
}

export default new CartPage();