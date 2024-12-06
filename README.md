# Automation Testing Project

## Overview
This project is a practice exercise in automation testing, focusing on functional testing of a public website, [DemoQA](https://demoqa.com/). The goal is to apply principles of automation testing using WebdriverIO to create a suite of tests that verify the functionality of various components of the website.

## Technologies Used
- **Automation Framework:** WebdriverIO
- **Programming Language:** JavaScript
- **Testing Framework:** Mocha / Jasmine (depending on preference)
- **Browser:** Chrome, Firefox (or any other browser supported by WebdriverIO)

## Functional Tests
The following functional tests are implemented in Gherkin format to ensure the correct behavior of the DemoQA website. Each scenario addresses specific interactions and expected outcomes.

### Feature: Interaction with the DemoQA website

#### Scenario 1: Verify that the homepage loads correctly
Given the user navigates to the page "https://demoqa.com/"
Then the title of the page should be "ToolsQA"
And the header "DemoQA" should be visible

#### Scenario 2: Navigate to the "Elements" section
Given the user is on the homepage
When the user clicks on the "Elements" link
Then they should be redirected to the "Elements" page
And the header "Elements" should be visible

#### Scenario 3: Fill out the form in the "Forms" section
Given the user is on the "Forms" page
When the user fills in the "First Name" field with "John"
And fills in the "Last Name" field with "Doe"
And fills in the "Email" field with "john.doe@example.com"
And selects "Male" as the gender
And clicks the "Submit" button
Then they should see a success message containing "Thanks for submitting the form"

#### Scenario 4: Interact with the "Widgets" component and verify the "Accordion"
Given the user is on the "Widgets" page
When the user clicks on the first item of the "Accordion"
Then they should see the expanded content of the "Accordion"
And the text should contain "This is the content of the Accordion"

#### Scenario 5: Perform a drag-and-drop action in the "Interactions" section
Given the user is on the "Interactions" page
When the user drags the "Draggable" element to the "Droppable" location
Then the "Droppable" element should display the text "Dropped!"

#### Scenario: Switch between tabs in the "Browser Windows" section
Given the user is on the "Browser Windows" page
When the user clicks on the "Tab" button
Then a new tab should open with the title "This is a sample page"
And the user switches to the new tab
Then the header "This is a sample page" should be visible
When the user closes the new tab
And switches back to the original tab
Then the header "Browser Windows" should be visible

#### Scenario: Switch between multiple windows in the "Browser Windows" section
Given the user is on the "Browser Windows" page
When the user clicks on the "Window" button
Then a new window should open with the title "This is a sample page"
And the user switches to the new window
Then the header "This is a sample page" should be visible
When the user closes the new window
And switches back to the original window
Then the header "Browser Windows" should be visible