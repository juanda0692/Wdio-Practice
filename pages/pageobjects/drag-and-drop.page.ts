import { $ } from '@wdio/globals';
import BasePage from './base.page';

class DragAndDropPage extends BasePage {

    public get firstSquare() {
        return $('#column-a')
    }

    public get firstSquareName() {
        return $('#column-a header')
    }

    public get secondSquare() {
        return $('#column-b')
    }

    public get secondSquareName() {
        return $('#column-b header')
    }

    public openDragAndDropPage() {
        return super.openHerokuApp('drag_and_drop')
    }
}

export default new DragAndDropPage()