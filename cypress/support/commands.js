// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Support commands to use cypress-image-snapshot
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'viewport',
});

// Desktop viewport
Cypress.Commands.add("desktopViewport", (size) => {
cy.viewport(1280, 720);

// Wait for viewport resize
cy.wait(500);
});

// iphone-x viewport
Cypress.Commands.add("iPhoneXViewport", (size) => {
  cy.viewport(375, 812);

  // Wait for viewport resize
  cy.wait(500);
});

// ipad-2 viewport
Cypress.Commands.add("iPad2Viewport", (size) => {
  cy.viewport(768, 1024);

  // Wait for viewport resize
  cy.wait(500);
});
