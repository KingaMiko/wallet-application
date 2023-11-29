import express from "express";

import { corsPlugin, bodyParserPlugin } from "./plugins/corsPlugin.js";
import { loggerPlugin } from "./plugins/loggerPlugin.js";
import { setupRoutes } from "./routes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
corsPlugin(app);
bodyParserPlugin(app);
loggerPlugin(app);
setupRoutes(app);

export default app;
