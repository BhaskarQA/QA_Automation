Feature: Validate pc portal functionalities

Background:
Given The user lands on the home page of PC portal
When User selects the company from the drop down

Scenario: verify and test the pc portal company and menuitems functionality
Then The user get the list of menu items
When The user click the first menu item
Then The user verify that the comments header title and menu list title are the same
When The user enter the text in the All Comments dialogue box.
Then The user verify the All comments box titles
When The user click the save button
Then The user verify the save status
When The user click the submit button
Then The user verify the submit status

# Scenario: verify and test the pc portal company and Secondmenuitems functionality
When The user click the second menu item
Then The user verify that the comments header title and menu list title are the same
When The user enter the text in the All Comments dialogue box.
Then The user verify the All comments box titles
When The user click the save button
Then The user verify the save status
When The user click the submit button
Then The user verify the submit status


# Scenario: verify and test the pc portal company and ThirdMenuitems functionality
When The user can click the third menu item
Then The user can verify that the comments header title and menu list title are the same
When The user can enter the text in the All Comments dialogue box
Then The user can verify the All comments box titles
When The user click the save button
Then The user verify the save status
When The user click the submit button
Then The user verify the submit status

Scenario: verify and test the pc portal company business metrics data
When The user click the business metrics
Then The user get the menu item details 
And The user verify the header of the spreadsheet board
And The user verify the spreadsheet
When The user can edit the spreadsheet column
And The user can enter the text in spreadsheet
And The user click the save button
Then The user verify the save status
When The user click the submit button
Then The user verify the submit status






