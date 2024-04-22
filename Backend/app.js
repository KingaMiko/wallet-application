import express from "express";

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
setupRoutes(app);
swaggerPlugin(app);

app.use(notFoundError);
app.use(internalError);

export default app;
