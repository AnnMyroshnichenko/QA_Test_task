import BasePage from './base.page.js';

class LoginPage extends BasePage {
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }
    get error() { return $('[data-test="error"]'); }

    get errorIconUser() { return $('#user-name ~ svg'); }
    get errorIconPassword() { return $('#password ~ svg'); }

    async open() {
        await super.open('/');
    }

    async login(username, password) {
        await this.type(this.username, username);
        await this.type(this.password, password);
        await this.click(this.loginBtn);
    }

    async getErrorText() {
        return await this.getText(this.error);
    }

    async areErrorIconsVisible() {
        return (
            await this.isDisplayed(this.errorIconUser) &&
            await this.isDisplayed(this.errorIconPassword)
        );
    }

    async areFieldsHighlighted() {
        const userClass = await this.username.getAttribute('class');
        const passClass = await this.password.getAttribute('class');
        return userClass.includes('error') && passClass.includes('error');
    }

    async areFieldsEmpty() {
        const userVal = await this.username.getValue();
        const passVal = await this.password.getValue();
        return userVal === '' && passVal === '';
    }
}

export default new LoginPage();