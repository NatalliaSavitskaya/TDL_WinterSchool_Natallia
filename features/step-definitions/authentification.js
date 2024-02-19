import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";

When(`I enter {string} as username`, async function (username) {
    await $("#username").setValue(username);
});

When(`I enter {string} as password`, async function (password) {
    await $ ("#password").setValue(password);
});