Feature: Dynamic Loading

    @wip
    Scenario: Waiting for a dynamic element
        Given I am on dynamic_loading/1 page
        When I press the Start button
        Then I see a text "Hello World!"

# here "dynamic_loading/1" is a word that is added to the url "https://the-internet.herokuapp.com/"