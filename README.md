# cypress-with-vr-html-report
### Purpose: 
1. Automate the top 5 critical functionalities of BuggyCars
2. Sample cypress project with integration to visual automated testing and HTML report

### Resource:
https://buggy.justtestit.org 

### Outcome:
1. A short description of the test approach for this project including automation strategy
2. Documented bug reports on 2-3 most critical bugs in the application
3. Automate the top 5 critical functionalities of BuggyCars

### Prerequisites to execute tests:
1. node --version : v16.6.2
2. npm --version: 7.20.3

### How to execute functional automated tests:
1. `git clone https://github.com/kiran-redhat/cypress-with-vr-html-report.git`
2. `npm install`
3. `npm run executeFunctionalTests:report` - You will see cypress opened and running automated tests in Chrome browser
4. Open `cypress/reports/mochawesome.html` file - to see report in beautiful HTML format

### How to execute [visual automated tests](https://medium.com/norwich-node-user-group/visual-regression-testing-with-cypress-io-and-cypress-image-snapshot-99c520ccc595) - This isn't part of assessment - I've written it to demonstrate how few lines of code can test entire page:
1. `git clone https://github.com/kiran-redhat/cypress-with-vr-html-report.git`
2. `npm install`
3. `npm run executeVisualTests:report` - Running these tests in headless mode - so we don't see browser opened (please see command prompts)
4. Open `cypress/reports/mochawesome.html` file - to see report in beautiful HTML format