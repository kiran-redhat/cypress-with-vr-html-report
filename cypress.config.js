const {defineConfig} = require('cypress');
const {addMatchImageSnapshotPlugin} = require('@simonsmith/cypress-image-snapshot/plugin');

module.exports = defineConfig({
    e2e: {
        projectId: "cypress-with-vr-html-report",
        baseUrl: "https://buggy.justtestit.org",
        chromeWebSecurity: false,
        reporter: "cypress-mochawesome-reporter",
        reporterOptions: {
            "reportDir": "cypress/reports",
            "charts": true,
            "reportPageTitle": "My Test Suite",
            "embeddedScreenshots": true,
            "inlineAssets": true
          },
        screenshotsFolder: "cypress/reports/screenshots",
        video: false,
        defaultCommandTimeout: 6000,                
        setupNodeEvents(on, config) {
            addMatchImageSnapshotPlugin(on, config);
        },
    },
  })