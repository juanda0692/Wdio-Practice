import { $ } from '@wdio/globals'
import BasePage from './base.page';

class HomePage extends BasePage {

    public get headerTitle() {
        return $('h1');
    }

    public openHomePageHerokuApp() {
        return super.openHerokuApp('');
    }
}

export default new HomePage();
