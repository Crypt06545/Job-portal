import * as Sentry from "@sentry/node";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import aj from "./config/arcjet.js"; // ✅
import { isSpoofedBot } from "@arcjet/inspect"; // ✅
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.routes.js";

dotenv.config();

const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
app.use(
  express.json({
    limit: "16kb",
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  }),
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet({ crossOriginResourcePolicy: false }));

// ✅ Arcjet global middleware
app.use((req, res, next) => {
  (async () => {
    // ✅ skip in dev
    if (process.env.NODE_ENV === "development") {
      return next();
    }

    if (req.path === "/webhooks") {
      return next();
    }

    try {
      const decision = await aj.protect(req, { requested: 5 });

      if (decision.isDenied()) {
        if (decision.reason.isRateLimit()) {
          return res.status(429).json({ error: "Too many requests" });
        } else if (decision.reason.isBot()) {
          return res.status(403).json({ error: "No bots allowed" });
        } else {
          return res.status(403).json({ error: "Forbidden" });
        }
      }

      if (decision.results.some(isSpoofedBot)) {
        return res.status(403).json({ error: "Forbidden" });
      }

      next();
    } catch (error) {
      console.error("Arcjet error:", error.message);
      next();
    }
  })();
});

app.use("/api/v1/company", companyRouter);
app.use("/api/v1/jobs", jobRouter);

export default app;
