Feature: Deal data creation

Scenario: CRM PRO Create a new deal scenario

Given userr is already on Login Page
When title of loginn page is CRM PRO
Then user enters username and password
| rajshaktiu | test@12345 |

Then user clicks onn login button
Then user is onn home page
Then user moves to new deal page
Then user enters deal details
| test deal | 1000 | 50 | 10 |

Then Close the browser