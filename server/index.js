import * as Sentry from "@sentry/node";
import "./config/instrument.js";
import dotenv from "dotenv";
import ConnectDB from "./db/connectDB.js";
import app from "./app.js";
import { clerkWebhooks } from "./controllers/weebhooks.js";

dotenv.config();

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebhooks);

Sentry.setupExpressErrorHandler(app);
ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGODB Connection Failed ${err}`);
  });
