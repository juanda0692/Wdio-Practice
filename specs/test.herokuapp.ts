import { expect } from '@wdio/globals'
import LoginPage from '../test/pageobjects/login.page'
import SecurePage from '../test/pageobjects/secure.page'
import HomePage from '../test/pageobjects/home.page'

describe('My Login application', () => {

    it('Scenario 1: Verify that the homepage loads correctly', async () => {
        await HomePage.openHomePageHerokuApp()
        await expect(HomePage.headerTitle).toHaveText('Welcome to the-internet')
    })

    it('Scenario 2: Login with valid credentials', async () => {
        await LoginPage.openLoginHerokuApp()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

