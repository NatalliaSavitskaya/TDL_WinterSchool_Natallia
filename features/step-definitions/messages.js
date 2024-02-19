import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";
import loginPage from "../page-objects/login.page.js"; // importing any page of class "LoginPage"

Then(`I see a message {string}`, async function (message) {
    await expect(loginPage.flashMessage) // replace selectors with elements of "LoginPage" class
    //the function textMessage() is declared in parent "Page" class, so element "loginPage" knows it 
        .toHaveText(expect.stringContaining(message)); 
    // await expect(await $("#flash")).toHaveText(expect.stringContaining(message));
});

Then("I see a text {string}", async function(text) {
    await expect(loginPage.textMessage(text)).toBeDisplayed(); // replace selectors with elements of "DynamicElementsPage" class, 
    // but the function textMessage() is declared in parent "Page" class, so element "loginPage" knows it 
    // await expect(await $(`//h4[text()="${text}"]`)).toBeDisplayed();
});