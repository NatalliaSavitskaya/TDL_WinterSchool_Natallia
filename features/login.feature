Feature: Login
    
  Scenario Outline: Login in username and password
    Given I am on login page
    When I enter <username> as username
    And I enter <password> as password
    And I press on Login button
    Then I see a message <message>
    And I <visibility> see the Logout button
    
    Examples: 
      | username   | password               | message                          | visibility |
      | "tomsmith" | "SuperSecretPassword!" | "You logged into a secure area!" | do         |
      | "dfv"      | "sfdvbsb!"             | "Your username is invalid!"      | don't      |
      | "tomsmith" | "sfdvbsb!"             | "Your password is invalid!"      | don't      |

# here "login" is a word that is added to the url "https://the-internet.herokuapp.com/"

# WIP = Work In Progress

#   Scenario: Possibility to log in with valid credantials
#     When I enter "tomsmith" as username
#     And I enter "SuperSecretPassword!" as password
#     And I press on "Login" button
#     Then I see a message "You logged into a secure area!"
#     And I do see the "Logout" button

#   Scenario: Impossibility to log in with invalid credentials
#     When I enter "dfv" as username
#     And I enter "sfdvbsb!" as password
#     And I press on "Login" button
#     Then I see a message "Your username is invalid!"
#     And I don't see the "Logout" button

#   Scenario: Impossibility to log in with invalid password
#     When I enter "tomsmith" as username
#     And I enter "sfdvbsb!" as password
#     And I press on "Login" button
#     Then I see a message "Your password is invalid!"
#     And I don't see the "Logout" button