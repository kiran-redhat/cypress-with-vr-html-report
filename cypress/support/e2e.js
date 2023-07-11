import {addMatchImageSnapshotCommand} from '@simonsmith/cypress-image-snapshot/command'
import './commands';

/* Cypress while running visual automated tests thinks that there are no reference images
as screenshotsFolder is set to cypress/reports/screenshots
and creating new snapshots under that folder and exiting without diffing. 
By explicitly mentioning in customSnapshotDir, it allows cypress-image-snapshot plugin 
just to run tests and create if there are any diffs */
addMatchImageSnapshotCommand({
    failureThreshold: 0.00,
    failureThresholdType: 'percent',
    customDiffConfig: { threshold: 0.0 },
    capture: 'viewport',
    customSnapshotsDir: 'cypress/snapshots/',
    customDiffDir: 'cypress/reports/screenshots/'
});

// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Support-file
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});