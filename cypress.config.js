const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 550,
    viewportWidth: 660,
    experimentalStudio: true,
    pageLoadTimeout: 80000
  },
});
