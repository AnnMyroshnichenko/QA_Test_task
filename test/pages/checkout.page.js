import BasePage from './base.page.js';

class CheckoutPage extends BasePage {
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get postalCode() { return $('#postal-code'); }

    get continueBtn() { return $('#continue'); }
    get finishBtn() { return $('#finish'); }

    get overviewContainer() { return $('.checkout_summary_container'); }
    get successMessage() { return $('.complete-header'); }
    get backHomeBtn() { return $('#back-to-products'); }

    async fillForm(first, last, zip) {
        await this.type(this.firstName, first);
        await this.type(this.lastName, last);
        await this.type(this.postalCode, zip);
    }

    async continue() {
        await this.click(this.continueBtn);
    }

    async finish() {
        await this.click(this.finishBtn);
    }

    async backHome() {
        await this.click(this.backHomeBtn);
    }

    async isOverviewDisplayed() {
        return await this.isDisplayed(this.overviewContainer);
    }

    async getSuccessText() {
        return await this.getText(this.successMessage);
    }
}

export default new CheckoutPage();