import { Page } from "./page.js"; // inport of element of class Page from page.js file

class DynamicElementsPage extends Page { // inheritance of class
    get startButton() { return $("#start button"); } // selectors that are defined on Dynamic Elements Page are as class parameters
}

export default new DynamicElementsPage(); // a new element of class "DynamicElementsPage" is created