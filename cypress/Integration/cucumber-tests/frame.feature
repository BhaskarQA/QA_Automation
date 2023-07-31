Feature: Validate investor portal

    Scenario: verify and test the investor portal functionalities
        Given I launch investor portal
        When I login by using username and password
            | username       | password       |
            | max.mustermann | max.mustermann |
        And I click on 2bx banner
        And I click on apply in 2bx 
        And I back to investor url
        And I click on reports section
        And I download the reports
        # Then I verify the pdf

