import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://5e45029bb3b813d8acb3dd95b019c616@o4511198933155840.ingest.us.sentry.io/4511198939709440",
  integrations: [nodeProfilingIntegration(), Sentry.mongooseIntegration()],
//   tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  sendDefaultPii: true,
});
