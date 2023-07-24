Feature: Validate Investor portal
 
  Background: 
  Given I can launch the investor url
  Scenario: verify and test the investor fund portal dashboards
    When I can login by using credentials
    And I can select the investor
    And I can click the insights
    Then I can validate the dashboard as expected

