import express from "express";

import { corsPlugin, bodyParserPlugin } from "./plugins/corsPlugin.js";
import { loggerPlugin } from "./plugins/loggerPlugin.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
corsPlugin(app);
bodyParserPlugin(app);
loggerPlugin(app);

export default app;
