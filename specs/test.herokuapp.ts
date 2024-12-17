import { expect } from '@wdio/globals'
import LoginPage from '../pages/pageobjects/login.page'
import SecurePage from '../pages/pageobjects/secure.page'
import HomePage from '../pages/pageobjects/home.page'
import DragAndDropPage from '../pages/pageobjects/drag-and-drop.page'

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

    it('Scenario 3: Perform a drag-and-drop action', async () => {
        await DragAndDropPage.openDragAndDropPage()
        const initialLetterFirstSquare = await DragAndDropPage.firstSquareName.getText();
        const initialLetterSecondSquare = await DragAndDropPage.secondSquareName.getText();
        await DragAndDropPage.secondSquare.waitForDisplayed({ timeout: 500 });
        const firstSquare = DragAndDropPage.firstSquare;
        await firstSquare.dragAndDrop(await DragAndDropPage.secondSquare, { duration: 500 });
        const finalLetterFirstSquare = await DragAndDropPage.firstSquareName.getText();
        const finalLetterSecondSquare = await DragAndDropPage.secondSquareName.getText();
        await expect(initialLetterFirstSquare).toEqual(finalLetterSecondSquare);
        await expect(finalLetterFirstSquare).toEqual(initialLetterSecondSquare);
    })
})

