//Create a class "Page" to be inharited by other web-pages under test - Login Page and Dynamic Elements Page
// "export" makes it be visible to other files

export class Page {
    get flashMessage() { return $("#flash"); } // function that does not need any parameter
    textMessage(text) { return $(`//h4[text()="${text}"]`); } // function based on parameter can't be with "get"

    async open(page) {
        await browser.navigateTo(`https://the-internet.herokuapp.com/${page}`); // function for navigating to the sertain page that is passed as parameter
    }
}

export default new Page(); // a new element of class "Page" is created