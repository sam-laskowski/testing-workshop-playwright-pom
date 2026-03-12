# Testing workshop in Playwright.ts - POM repository

This is your starting repository for the workshop!
Here is the website you will be testing https://www.gov.uk/calculate-your-holiday-entitlement

### Pre-requisites

Homebrew - https://brew.sh/

Yarn - `brew install yarn`

Node - `brew install node`

### Setting up the suite

Run these commands first:

`yarn install`

`yarn playwright install`

### To run the tests

`yarn test` will run your tests in a Chromium browser as specified in the package.json script

`yarn playwright test` will run your tests in all browsers

You can create new scripts in the package.json file.

### Task 1

1. Familiarise yourself with the website you will be testing https://www.gov.uk/calculate-your-holiday-entitlement
2. Run the example test in the example_test.spec.ts file by running `yarn test` in your terminal
3. Draw a flow diagram of the user journey followed in this example test

### Task 2

1. Choose a different user journey through the website and add it to your flow diagram
2. Open the your_test.spec.ts file and add your user journey steps as //comments
3. Show us your flow diagram and test step comments BEFORE YOU START CODING
4. Create page objects and content files for any new pages you interact with
5. Add your test steps to the your_test.spec.ts file to cover your new user journey (run `yarn my_test` to run your test individually)