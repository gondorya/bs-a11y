require('browserstack-cypress-cli/bin/accessibility-automation/cypress');
const browserstackAccessibility = require('browserstack-cypress-cli/bin/accessibility-automation/plugin');

module.exports = {
  'projectId': '4b7344',
  e2e: {
    setupNodeEvents(on, config) {
      browserstackAccessibility(on, config);
      return config;
    }
  },
}
