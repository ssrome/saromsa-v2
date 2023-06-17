import { defineConfig } from "cypress";

export default defineConfig({
  downloadsFolder: "__tests__/downloads",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "__tests__/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
  },
  fixturesFolder: "__tests__/fixtures",
  screenshotsFolder: "__tests__/screenshots",
  screenshotOnRunFailure: false,
  video: false,
  videosFolder: "__tests__/videos",
  watchForFileChanges: true,
});
