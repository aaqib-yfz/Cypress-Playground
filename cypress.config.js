const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 660,
    viewportWidth: 1000,
    experimentalStudio: true,
    pageLoadTimeout: 90000
  },
});
