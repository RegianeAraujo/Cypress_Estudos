const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1300,
  chromeWebSecurity: false,
  env:{
    baseUrl: "https://demo.opencart.com/",
  },
  e2e: {
    experimentalRunAllSpecs: true, // config. p/ rodar todos os testes.
    hideXHRInCommandLog: true,    // complemento da configuração p/ esconder as requisições htpp (comando em support/commands.js)
    specPattern:[                  //TODOS OS TESTES deverão estar listando abaixo. 
      "cypress/e2e/library/test/01- Homepage.cy.js",
      "cypress/e2e/library/test/02 - Registropage.cy.js",
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
