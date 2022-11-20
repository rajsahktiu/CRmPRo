Feature: CRM PRO Login Feature
 

#Without Examples Keyword
#Scenario: CRM Pro Login Test Scenario
#
#Giver User is already on Login Page
#When title of login page is CRM PRO
#Then user enters "rajshaktiu" and "Test@12345"
#Then user Click on login Button
#Then user is on home page


#with Examples Kwyword
Scenario Outline: CRM PRO Login Test Scenario

    Given user is already on Login Page
    When title of Login Page is CRM PRO
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    Then user is on home page
    Then close the browser


    Examples: 
      | username   | password  |
      | rajshaktiu | Test@12345|
      | peter      | test123   |
