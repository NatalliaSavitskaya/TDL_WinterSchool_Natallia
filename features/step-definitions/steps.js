//npm run wdio

import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";

Given("I am on Login page", async function () {
    await browser.navigateTo("https://the-internet.herokuapp.com/login");
    //await browser.pause(5000);//5 sec
});

When(`I enter "tomsmith" as username`, async function () {
    // const usernameInput = await $ ("#username");
    // usernameInput.setValue("tomsmith");
    await $("#username").setValue("tomsmith");
});

When(`I enter "dfv" as username`, async function () {
    await $("#username").setValue("dfv");
});

When(`I enter "SuperSecretPassword!" as password`, async function () {
    await $ ("#password").setValue("SuperSecretPassword!");
});

When(`I enter "sfdvbsb!" as password`, async function () {
    await $ ("#password").setValue("sfdvbsb!");
});

When(`I press on "Login" button`, async function () {
    await $ ("button[type=submit]").click();
});

Then(`I see a message "You logged into a secure area!"`, async function () {
    //await browser.debug(); - the execution need to be stopped manually
    await expect(await $ ("#flash"))
        .toHaveText(expect.stringContaining("You logged into a secure area!"));  
});

Then(`I see a message "Your username is invalid!"`, async function () {
    await expect(await $ ("#flash"))
        .toHaveText(expect.stringContaining("Your username is invalid!"));  
});

Then(`I see a message "Your password is invalid!"`, async function () {
    await expect(await $ ("#flash"))
        .toHaveText(expect.stringContaining("Your password is invalid!"));  
});

Then(`I see the "Logout" button`, async function () {
    //(await $("i*=Logout")).waitForDisplayed();
    await expect(await $ ("i*=Logout")).toBeDisplayed();
});

Then(`I don't see the "Logout" button`, async function () {
    await expect(await $ ("i*=Logout")).not.toBeDisplayed();
});