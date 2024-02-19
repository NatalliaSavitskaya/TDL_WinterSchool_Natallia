import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";
import loginPage from "../page-objects/login.page.js"; // importing any page of class "LoginPage"

When('I press on Login button', async function() {
    await loginPage.loginButton.click(); // replace selectors with elements of "LoginPage" class
    // await $("button[type=submit]").click();
});

Then('I {word} see the Logout button', async function(visibility) {
    if (visibility === "do") {
        await expect(loginPage.logoutButton).toBeDisplayed(); // replace selectors with elements of "LoginPage" class
    } else if (visibility === "don't") {
        await expect(loginPage.logoutButton).not.toBeDisplayed(); // replace selectors with elements of "LoginPage" class
    } else {
        throw Error(`Visiblity ${visibility} not supported`);
    }
});