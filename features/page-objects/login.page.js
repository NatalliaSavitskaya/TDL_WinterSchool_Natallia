import { Page } from "./page.js"; // inport of element of class Page from page.js file

class LoginPage extends Page { // inheritance of class
    get usernameInput() { return $("#username"); } // selectors that are defined on Login Page are as class parameters
    get passwordInput() { return $("#password"); } 
    get loginButton() { return $("button[type=submit]"); }
    get logoutButton() { return $("i*=Logout"); } // XPath selectors can be used in Cucumber framework
}

export default new LoginPage(); // a new element of class "LoginPage" is created