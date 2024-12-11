import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class SecurePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    public get flashAlert() {
        return $('#flash');
    }
}

export default new SecurePage();
