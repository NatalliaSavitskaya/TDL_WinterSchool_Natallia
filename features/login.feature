Feature: Login

    Scenario: Possibility to log in with valid credantials
        Given I am on Login page
        When I enter "tomsmith" as username 
        And I enter "SuperSecretPassword!" as password
        And I press on "Login" button
        Then I see a message "You logged into a secure area!"
        And I see the "Logout" button

    Scenario: Impossibility to log in with invalid credantials
        Given I am on Login page
        When I enter "dfv" as username 
        And I enter "sfdvbsb!" as password
        And I press on "Login" button
        Then I see a message "Your username is invalid!"
        And I don't see the "Logout" button    

    Scenario: Impossibility to log in with invalid password
        Given I am on Login page
        When I enter "tomsmith" as username 
        And I enter "sfdvbsb!" as password
        And I press on "Login" button
        Then I see a message "Your password is invalid!"
        And I don't see the "Logout" button 