@FunctionalTest
Feature: CRM PRO application testing

@SmokeTest @RegressionTest
Scenario: Login with Incorrect username and password
Given This is valid login test

@RegressionTest
Scenario: Login with Incorrect username and password
Given This is invalid login test

@SmokeTest
Scenario: Create a contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a deal test case

@RegressionTest
Scenario: Create a task
Given This is a task test case

@SmokeTest
Scenario: Create a case
Given This is a case test case

@SmokeTest @RegressionTest
Scenario: Verify left panel links
Given clicking on left panel links

@SmokeTest
Scenario: Search a deal
Given This is a search deal test

@SmokeTest
Scenario: Search a contacts
Given This is a search contact test

@SmokeTest @RegressionTest
Scenario: Search a case
Given This is a search case test

@SmokeTest @RegressionTest
Scenario: Search a task
Given This is a search task test

@SmokeTest @End2EndTest
Scenario: Search a call
Given This is a search call test

@SmokeTest @End2EndTest
Scenario: Search an email
Given This is a search email test

@SmokeTest @End2EndTest
Scenario: Search a docs
Given This is a search docs test

@SmokeTest @End2EndTest
Scenario: Search a forms
Given This is a search forms test

@End2EndTest
Scenario: Validate a reports
Given This is a report test

@End2EndTest
Scenario: Application logout
Given This is a logout test