import { $ } from '@wdio/globals'
import BasePage from './base.page';

class LoginPage extends BasePage {

    public get inputUsername() {
        return $('#username');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSubmit() {
        return $('button[type="submit"]');
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public openLoginHerokuApp() {
        return super.openHerokuApp('login');
    }
}

export default new LoginPage();
