Feature: Validate Investor portal
 
  Scenario: verify and test the investor fund portal dashboards
    Given I launch the investor url
    When I login by using credentials
    Then I verify the dashboard title Timeline
    When I select the investor
    And I select the 2bx Fund
    And I click on the 2bX  
    Then I back to investor dashboard page 
    When I click on news events 
    Then I verify the tab directed to news
    And I back to investor dashboard page 
  






    
    


    
