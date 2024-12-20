import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {

    public openHerokuApp(path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
