# Project Documentation

## Overview

This project is a test automation suite built with **Cypress** to validate critical functionalities of an ecommerce platform. The tests are designed to work on both desktop and mobile views, ensuring cross-device compatibility. It leverages **Mocha Awesome Reporter** for generating detailed test reports.

---

## Prerequisites

Before running the project, ensure the following are installed:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Cypress (`npm install cypress`)

---

## Project Setup

1. Clone this repository and install the dependencies
   git clone <repository_url>
   npm install

### To execute all tests in the suite

npm run test

### Run Specific Tests

npx cypress run --spec "cypress/e2e/<test_file_name>.cy.js"

### Run test using the cypress user interface

npx cypress open

## Viewing Reports

This project uses Cypress Mocha Awesome Reporter for generating reports.

### Generating a Report

After running the tests, a report will be automatically generated in the mochawesome-report directory.
You can customize the reporter configuration in the cypress.config.js file under the reporterOptions section.
Viewing the Report

### To view the report:

Open the mochawesome-report/mochawesome.html file in any browser.
The report provides:
Test case results (Passed/Failed)
Screenshots for failed tests (if configured)
Detailed logs and execution time

# Test cases

## 1. Login

**Description**: Verify that a user can log in successfully with valid credentials.

### Steps:

1. Navigate to the ecommerce platform in desktop mode.
2. Enter a valid username and password in the login form.
3. Click on the "Login" button.

### Validation:

- The user is redirected to the dashboard or homepage.
- The user's profile is displayed.

---

## 2. Sign Up

**Description**: Verify that a user can create a new account successfully.

### Steps:

1. Navigate to the ecommerce platform in desktop mode.
2. Click on the "Sign Up" button.
3. Fill out the required fields, such as name, email, and password.
4. Submit the form.

### Validation:

- A success message confirming account creation is displayed.
- The user is redirected to the login page or logged in automatically.

---

## 3. Add Product from Home Page

**Description**: Verify that a customer can add a product to the cart directly from the homepage.

### Steps:

1. Navigate to the ecommerce platform in desktop mode.
2. Identify a product displayed on the homepage.
3. Click on the "Add to Cart" button for the selected product.

### Validation:

- The cart updates with the selected product, showing the correct price and quantity.

---

## 4. Add Product from PDP (Product Description Page)

**Description**: Verify that a customer can add a product to the cart from the product description page.

### Steps:

1. Search for a product and open its details page.
2. Click on the "Add to Cart" button.
3. Validate that the cart updates with the selected product.

### Validation:

- The product appears in the cart with the correct price and quantity.

---

## 5. Checkout

**Description**: Simulate the checkout process in a complete flow (without completing the payment).

### Steps:

1. Navigate to the ecommerce platform in desktop mode.
2. Add a product to the cart.
3. Proceed to checkout.
4. Complete shipping and billing information.
5. Validate the order summary.

### Validation:

- All steps are completed without errors.
- The summary displays the correct product information, shipping details, and prices.

# Mobile Test Cases

## 1. Login on Mobile

**Description**: Verify that a user can log in successfully with valid credentials on mobile devices.

### Steps:

1. Access the ecommerce platform in mobile view.
2. Enter a valid username and password.
3. Click the "Login" button.

### Validation:

- The user is redirected to the mobile-friendly homepage.
- The user's profile is displayed correctly.

---

## 2. Sign Up on Mobile

**Description**: Verify that a user can sign up successfully on mobile devices.

### Steps:

1. Access the ecommerce platform in mobile view.
2. Navigate to the "Sign Up" form.
3. Fill in the required fields.
4. Submit the form.

### Validation:

- An alert is displayed indicating that the user already exists.

---

## 3. Add Product from Home Page on Mobile

**Description**: Verify that a product can be added to the cart directly from the homepage on mobile devices.

### Steps:

1. Access the ecommerce platform in mobile view.
2. Locate a product displayed on the homepage.
3. Tap "Add to Cart" for the selected product.

### Validation:

- The cart updates with the selected product.
- The product details and quantity are displayed correctly in the cart.

## 5. Checkout on Mobile

**Description**: Simulate the checkout process in a complete flow (without completing the payment) on mobile devices.

### Steps:

1. Navigate to the ecommerce platform in mobile view.
2. Add a product to the cart.
3. Proceed to checkout.
4. Complete shipping and billing information.
5. Validate the order summary.

### Validation:

- All steps are completed without errors.
- The summary displays the correct product information, shipping details, and prices.
