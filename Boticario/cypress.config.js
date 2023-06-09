const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1300,
  chromeWebSecurity: false,
  env:{
    baseUrl: "https://www.sephora.com.br",
    baseUrl_2: "https://www.lojasrenner.com.br/",
  },
  e2e: {
    defaultCommandTimeout: 60000,  // 6000 pois é em mili-segundos.
    experimentalRunAllSpecs: true, // config. p/ rodar todos os testes.
    hideXHRInCommandLog: true,    // complemento da configuração p/ esconder as requisições htpp (comando em support/commands.js)
    specPattern:[                  //TODOS OS TESTES deverão estar listando abaixo. 
      "cypress/e2e/library/test/01 - Validação da home page do site.cy.js",
      "cypress/e2e/library/test/02 - Validação de pesquisa.cy.js",
      "cypress/e2e/library/test/03 - Validar Login.cy.js",
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
