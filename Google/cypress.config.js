const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1300,
  chromeWebSecurity: false,
  env:{
    baseUrl: "https://www.google.com/",
  },
  e2e: {
    defaultCommandTimeout: 60000,  // 6000 pois é em mili-segundos.
    experimentalRunAllSpecs: true, // config. p/ rodar todos os testes.
    hideXHRInCommandLog: true,    // complemento da configuração p/ esconder as requisições htpp (comando em support/commands.js)
    specPattern:[                  //TODOS OS TESTES deverão estar listando abaixo. 
      "cypress/e2e/library/test/01 - Validação da home page do site.cy.js",
      "cypress/e2e/library/test/02 - Validação de Gmail.cy.js",
      "cypress/e2e/library/test/03 - Validar Criacao de conta.cy.js",
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
