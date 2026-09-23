const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '233hut',
  e2e: {
    reporterOptions:{
      charts: true,
      reportTitle: 'Projeto Web',
      reportPageTitle: 'Projeto Web'
    },
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
