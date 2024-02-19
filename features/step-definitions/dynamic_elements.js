import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";
import dynamicElementsPage from "../page-objects/dynamic_elements.page.js"; // importing any page of class "DynamicElementsPage"

When("I press the Start button", async function() {
    await dynamicElementsPage.startButton.click(); // replace selectors with elements of "DynamicElementsPage" class
    //await $("#start button").click();
});