import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';
import './commands';

/* Cypress while running visual automated tests thinks that there are no reference images
as screenshotsFolder is set to cypress/reports/screenshots
and creating new snapshots under that folder and exiting without diffing. 
By explicitly mentioning in customSnapshotDir, it allows cypress-image-snapshot plugin 
just to run tests and create if there are any diffs */
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
    customSnapshotsDir: 'cypress/snapshots/',
    customDiffDir: 'cypress/reports/screenshots/'
})