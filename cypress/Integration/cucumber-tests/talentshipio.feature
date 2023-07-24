Feature: Validate talentship portal
 
  Scenario: verify and test the talentshipio portal functionalities
  Given I launch the talentship io portal
  When I click on careers 

  Scenario: verify and test the talentshipio dev portal functionalities
  Given I launch talentshipio dev portal
  When I select the Location 
  Then I verify the Current Job openings title 
  And I verify the talentship logo
  And I can verify the departments and positions
  And I can verify the hr email id
  When I click on show details
  Then I can validate the headers
  When I click on Apply Now
  And I update submit your application details
      | firstname | lastname | phonenumber | email               |
      | test      | sample   | 1111111111  | testsample@test.com |
   And I click on robo check box  
   And I click submit button 

  


  