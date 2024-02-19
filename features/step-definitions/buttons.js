import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";

When('I press on Login button', async function() {
    const button = await $("button[type=submit]");
    await button.click();
});

Then('I {word} see the Logout button', async function(visibility) {
    if (visibility === "do") {
        await expect($("i*=Logout")).toBeDisplayed();
    } else if (visibility === "don't") {
        await expect($("i*=Logout")).not.toBeDisplayed();
    } else {
        throw Error(`Visiblity ${visibility} not supported`);
    }
});