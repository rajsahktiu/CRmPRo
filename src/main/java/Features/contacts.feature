Feature: CRM PRO Create Contacts

Scenario Outline: CRM PRO Create a New Contact Scenario

Given user is already on Login Page
When title of login page is CRM PRO
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
	| username | password | firstname | lastname | position |
	| naveenk  | test@123 | Tom 	    | Peter    | Manager  |
	| naveenk  | test@123 | David 	  | Dsouza   | Director |