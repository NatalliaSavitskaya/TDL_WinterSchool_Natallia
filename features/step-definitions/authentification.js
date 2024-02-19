import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";
import loginPage from "../page-objects/login.page.js"; // importing any page of "LoginPage" class

When(`I enter {string} as username`, async function (username) {
    await loginPage.usernameInput.setValue(username); // replace selectors with elements of "LoginPage" class
    //await $("#username").setValue(username);
});

When(`I enter {string} as password`, async function (password) {
    await loginPage.passwordInput.setValue(password); // replace selectors with elements of "LoginPage" class
    // await $("#password").setValue(password);
});