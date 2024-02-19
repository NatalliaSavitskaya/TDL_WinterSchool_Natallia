import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";

Then(`I see a message {string}`, async function (message) {
    await expect(await $ ("#flash"))
        .toHaveText(expect.stringContaining(message));  
});