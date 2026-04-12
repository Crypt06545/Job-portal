import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://5e45029bb3b813d8acb3dd95b019c616@o4511198933155840.ingest.us.sentry.io/4511198939709440",

  sendDefaultPii: true,

  integrations: [Sentry.mongooseIntegration()],
});
