// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
import 'cypress-mochawesome-reporter/register';

/* Cypress while running visual automated tests thinking that there are no reference images
as screenshotsFolder is set to cypress/reports/screenshots
and creating new snapshots under that folder and exiting without diffing. 
By explicitly mentioning in customSnapshotDir, it allows cypress-image-snapshot plugin 
just to run tests and create if there are any diffs */
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
    customSnapshotsDir: 'cypress/snapshots/',
    customDiffDir: 'cypress/reports/screenshots/'
})
