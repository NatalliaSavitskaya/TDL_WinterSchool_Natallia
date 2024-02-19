import { Given, When, Then } from '@wdio/cucumber-framework';
import {browser, $} from "@wdio/globals";
import page from "../page-objects/page.js"; // importing any page of class "Page"

Given("I am on {word} page", async function(pageName) {
    await page.open(pageName); // call "open" function of parent "Page" class with a pageName as parameter
    // await browser.navigateTo(`https://the-internet.herokuapp.com/${page}`);
});