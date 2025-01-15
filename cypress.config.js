const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 10000, // Aumenta a 10 segundos
  screenshotOnRunFailure: true, //add
  reporter: 'cypress-mochawesome-reporter', //add
  reporterOptions: { //add
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportPageTitle: "Orange Test",
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});