# Automated Tests for The Internet (HerokuApp)

This document outlines the automated test scenarios implemented for the websites [The Internet](https://the-internet.herokuapp.com/) & [Online Store](https://automationteststore.com/) using WebdriverIO.

## Test Scenarios

## (https://the-internet.herokuapp.com/)

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

## (https://automationteststore.com/)

### Scenario 1: Successful User Registration
Given the user is on the "Registration" page
When the user fills in all required fields with valid data
And clicks on the "Register" button
Then the user should be redirected to the confirmation page
And a message confirming successful registration should be displayed.

### Scenario 2: Registration with Missing Required Fields
Given the user is on the "Registration" page
When the user leaves mandatory fields blank
And clicks on the "Register" button
Then an error message should be displayed indicating the required fields.

### Scenario 3: Login with Valid Credentials
Given the user is on the "Login" page
When the user enters a valid email and password
And clicks on the "Login" button
Then the user should be redirected to their account dashboard.

### Scenario 4: Login with Invalid Credentials
Given the user is on the "Login" page
When the user enters an incorrect email or password
And clicks on the "Login" button
Then an error message should be displayed indicating invalid credentials.

### Scenario 5: Search for an Existing Product
Given the user is on the "Home" page
When the user enters a valid product name in the search bar
And clicks on the "Search" button
Then a list of products matching the search term should be displayed.

### Scenario 6: Search with No Results
Given the user is on the "Home" page
When the user enters a non-existent product name in the search bar
And clicks on the "Search" button
Then a message should be displayed indicating no products were found.

### Scenario 7: Add Product to Cart
Given the user is on a product's detail page
When the user clicks on the "Add to Cart" button
Then the product should be added to the cart
And the cart count should be updated.

### Scenario 8: Update Product Quantity in Cart
Given the user has added a product to the cart
When the user updates the product quantity to 2
And clicks on the "Update Cart" button
Then the cart subtotal should reflect the updated quantity.

### Scenario 9: Complete Checkout Successfully
Given the user has products in their cart
And is on the "Checkout" page
When the user fills in valid payment and shipping details
And clicks on the "Place Order" button
Then the order should be placed successfully
And a confirmation page with the order number should be displayed.

### Scenario 10: Payment with Invalid Card Details
Given the user is on the "Checkout" page
When the user enters invalid card details
And clicks on the "Place Order" button
Then an error message should be displayed indicating the payment could not be processed.

### Scenario 11: Update Personal Information
Given the user is logged in and on the "My Account" page
When the user updates their personal information (e.g., name, address)
And clicks on the "Save Changes" button
Then the updated information should be saved successfully
And a success message should be displayed.

### Scenario 12: View Order History
Given the user is logged in and on the "My Account" page
When the user navigates to the "Order History" section
Then a list of previous orders should be displayed
And clicking on an order should show the details of that order.

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