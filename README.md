## A sample application's functional + visual automated tests with Cypress

### Application to test
https://buggy.justtestit.org

### Github actions
<p> See all test runs under github actions </p>

### Automate the top 5 critical functionalities of BuggyCars
<b> I've written happy path automated tests for following 2 out of 5 functionalities as it is for demonstration purpose. </b>
1. User registration & profile updates
2. User login
3. Un-authenticated user actions - able to see votes and all comments for Popular make, Popular model & Overall rating
4. Authenticated user actions - able to vote in addition to seeing votes and all comments for Popular make, Popular model & Overall rating
5. Headers, footer and homepage logo

<b> Prerequisites to execute tests:</b>
1. node --version : v16.6.2
2. npm --version: 7.20.3

<b>  How to execute functional automated tests:</b> 
1. `git clone https://github.com/kiran-redhat/cypress-with-vr-html-report.git`
2. `npm install`
3. `npm run executeFunctionalTests:report` - You will see Cypress opened and running automated tests in the Chrome browser
4. Open `cypress/reports/mochawesome.html` file - to see the report in beautiful HTML format

<b>  How to execute [visual automated tests](https://medium.com/norwich-node-user-group/visual-regression-testing-with-cypress-io-and-cypress-image-snapshot-99c520ccc595) </b> 
<p> I've written it to demonstrate how few lines of code can test an entire page in multiple screen sizes.
As different systems got different architectures, a good strategy is to run these tests in docker containers - so they will generate same snapshots all the time (without which they may fail). </p>

1. `git clone https://github.com/kiran-redhat/cypress-with-vr-html-report.git`
2. `npm install`
3. `npm run executeVisualTests:report` - Running these tests in headless mode - so the browser will not open (please see command prompts)
4. Open `cypress/reports/mochawesome.html` file - to see the report in beautiful HTML format

### A short description of the test approach for this project

<b> Manual testing</b>
1. Exploratory Testing (as the application has already been developed)
2. Different supported Devices testing
3. Different supported browsers testing
4. Accessibility testing
5. SQL injections as an authenticated user
6. JavaScript errors in the browser
7. Analytics testing (if there is any)
8. Geo-location testing (some models may not be available in some regions)

<b> Automated testing</b>
1. Functional test automation
2. Visual automated testing
3. Non-functional testing (load, response time, etc)

### Documented bug reports on 2-3 most critical bugs in the application

#### Bug1
<b> Bug summary: </b> <p>Clicking on 'Rank' column in https://buggy.justtestit.org/overall isn't filtering it in ascending or descending order</p>
<b> Steps to reproduce: </b>
<p>
1. Navigate to https://buggy.justtestit.org/overall
2. Click on the 'Rank' column
Expected: Overall rating isn't getting sorted in ascending order. It should be 2 after 1.
Actual: Overall rating should be sorted in ascending order for the first click and it should be in descending order for the second click</p>
<b> Evidences: </b> <p> Please see Bug1_Evidence_Screenshot.png in this repo</p>

#### Bug2
<b> Bug summary: </b> <p>Sorting not working for all columns at https://buggy.justtestit.org/make/c0bm09bgagshpkqbsuag</p>
<b> Steps to reproduce: </b><p>
1. Navigate to https://buggy.justtestit.org/make/c0bm09bgagshpkqbsuag
2. Click on any column
Expected: Sorting should work for all the columns
Actual: Clicking on columns not sorting them in ascending or descending order</p>

<b> Evidences: </b> <p>Please see Bug2_Evidence_Screenshot.png in this repo</p>
