const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress'); 

module.exports = defineConfig({ 
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', cucumber())
      
    },
    specPattern: 'cypress/integration/cucumber-tests/*.feature',

  },
})
