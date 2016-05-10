Feature: App

    Scenario: Not clicking the button should show nothing
        Given I am on the home page
        Then The message should be empty

    Scenario: Clicking the button once should show "clicked"
        Given I am on the home page
        When I click the button once
        Then The message should say clicked

    Scenario: Clicking the button twice should show "clicked again"
        Given I am on the home page
        When I click the button twice
        Then The message should say clicked again
