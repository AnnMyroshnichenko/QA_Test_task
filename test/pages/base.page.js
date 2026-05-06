export default class basePage {
    async open(path = '') {
        await browser.url(path);
    }

    async click(element) {
        await element.waitForDisplayed();
        await element.waitForClickable();
        await element.click();
    }

    async type(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    async getText(element) {
        await element.waitForDisplayed();
        return await element.getText();
    }

    async isDisplayed(element) {
        return await element.isDisplayed();
    }
}