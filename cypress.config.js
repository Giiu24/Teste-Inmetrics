const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com', // URL da sua aplicação
    specPattern: 'cypress/e2e/Features/*.{feature,js}', // Padrão para encontrar arquivos de teste
    supportFile: 'cypress/support/index.js', // Caminho para o arquivo de suporte
    setupNodeEvents(on, config) {
      // Configura o preprocessor para Cucumber
      on('file:preprocessor', cucumber());
    },
  },
});
