$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_WorkSpace/CRMProBddFrameWork/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM PRO Login Feature",
  "description": "",
  "id": "crm-pro-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: CRM Pro Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Giver User is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is CRM PRO"
    },
    {
      "line": 9,
      "value": "#Then user enters \"rajshaktiu\" and \"Test@12345\""
    },
    {
      "line": 10,
      "value": "#Then user Click on login Button"
    },
    {
      "line": 11,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#with Examples Kwyword"
    }
  ],
  "line": 15,
  "name": "CRM PRO Login Test Scenario",
  "description": "",
  "id": "crm-pro-login-feature;crm-pro-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Title of Login Page is CRM PRO",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "crm-pro-login-feature;crm-pro-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "crm-pro-login-feature;crm-pro-login-test-scenario;;1"
    },
    {
      "cells": [
        "rajshaktiu",
        "Test@12345"
      ],
      "line": 27,
      "id": "crm-pro-login-feature;crm-pro-login-test-scenario;;2"
    },
    {
      "cells": [
        "peter",
        "test123"
      ],
      "line": 28,
      "id": "crm-pro-login-feature;crm-pro-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "CRM PRO Login Test Scenario",
  "description": "",
  "id": "crm-pro-login-feature;crm-pro-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Title of Login Page is CRM PRO",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"rajshaktiu\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 7344588100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_CRM_PRO()"
});
formatter.result({
  "duration": 31406300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO  - CRM software for customer relationship management, sales, and support.]\u003e but was:\u003c[title]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefination.LoginStepDefination.title_of_login_page_is_CRM_PRO(LoginStepDefination.java:35)\r\n\tat ✽.When Title of Login Page is CRM PRO(C:/Selenium_WorkSpace/CRMProBddFrameWork/src/main/java/Features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajshaktiu",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 30
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 28,
  "name": "CRM PRO Login Test Scenario",
  "description": "",
  "id": "crm-pro-login-feature;crm-pro-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Title of Login Page is CRM PRO",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"peter\" and \"test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 5194854200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_CRM_PRO()"
});
formatter.result({
  "duration": 26316100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO  - CRM software for customer relationship management, sales, and support.]\u003e but was:\u003c[title]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefination.LoginStepDefination.title_of_login_page_is_CRM_PRO(LoginStepDefination.java:35)\r\n\tat ✽.When Title of Login Page is CRM PRO(C:/Selenium_WorkSpace/CRMProBddFrameWork/src/main/java/Features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "peter",
      "offset": 13
    },
    {
      "val": "test123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});