# Automated Tests for The Internet (HerokuApp)

This document outlines the automated test scenarios implemented for the website [The Internet](https://the-internet.herokuapp.com/) using WebdriverIO.

## Test Scenarios

### Scenario 1: Verify that the homepage loads correctly
**Given** the user navigates to the homepage `https://the-internet.herokuapp.com/`  
**Then** the header `Welcome to the-internet` should be visible.  

### Scenario 2: Login with valid credentials
**Given** the user is on the "Login Page"
**When** the user enters the username tomsmith and password SuperSecretPassword!
**And** clicks the login button
**Then** the user should be redirected to a secure area
**And** the flash alert with the message You logged into a secure area! should be visible.

### Scenario 3: Perform a drag-and-drop action
**Given** the user is on the "Drag and Drop" page  
**When** the user drags the `Draggable` element to the `Droppable` element  
**Then** the `Droppable` element should display the text `B`.  

### Scenario 4: Switch between multiple windows
**Given** the user is on the "Multiple Windows" page  
**When** the user clicks on the "Click Here" link to open a new window  
**Then** a new window should open with the header `New Window`  
**And** the user switches to the new window  
**Then** the header `New Window` should be visible  
**When** the user closes the new window  
**And** switches back to the original window  
**Then** the header `Opening a new window` should be visible.  

## Prerequisites
- Node.js installed on your machine.
- WebdriverIO framework installed.
- Dependencies installed via `npm install`.

## Running the Tests
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the tests using the command:  
   ```bash
   npm run wdio
   ```

## Folder Structure
- **page.ts**: Contains the base class with shared methods.
- **login.page.ts**: Contains methods and selectors specific to the login functionality.
- **test files**: Located in the test folder, covering various scenarios for The Internet website.

## Notes
- These tests are written for demonstration purposes and may require adjustments for changes in the website structure or additional scenarios.

