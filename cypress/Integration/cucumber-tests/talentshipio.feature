Feature: Validate talentship portal
 
  Scenario: verify and test the talentship portal functionalities
  Given I launch the talentship io portal
  When I click on careers 
  And I select the Location 
  Then I verify the talentship logo
  And I can verify the departments and positions
  When I click on show details
  Then I can validate the headers
  When I click on Apply Now
  


  