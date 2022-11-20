Feature: Deal data creation

Scenario: CRM PRO Create a new deal scenario

Given user is alreadyy on Login Page
When title of loginn page iss CRM PRO
Then user enterss username and password
| username   | password   |
| rajshaktiu | test@12345 |

Then user clickss on login button
Then user iss on homee page
Then user movess to new deal page
Then user enterss deal details
| title | amount | probability | comission | 
| test deal1 | 1000 | 50 | 10 |
| test deal2 | 2000 | 60 | 20 |
| test deal3 | 3000 | 70 | 30 |

Then Closee the browser