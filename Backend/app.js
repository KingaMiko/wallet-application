import express from "express";
import rateLimit from "express-rate-limit";

import {
  corsPlugin,
  bodyParserPlugin,
  loggerPlugin,
  authPlugin,
  swaggerPlugin,
} from "./plugins/index.js";
import { setupRoutes } from "./routes.js";
import { notFoundError, internalError } from "./controllers/errors/index.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
loggerPlugin(app);
corsPlugin(app);
authPlugin(app);
bodyParserPlugin(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use(limiter);

setupRoutes(app);
swaggerPlugin(app);

app.use(notFoundError);
app.use(internalError);

export default app;
