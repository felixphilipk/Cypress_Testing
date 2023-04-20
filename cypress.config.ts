import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    chromeWebSecurity: false,
    "defaultCommandTimeout": 10000,
    viewportHeight: 1000,
    viewportWidth: 1280,
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
