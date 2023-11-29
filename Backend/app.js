import express from "express";

import { corsPlugin, bodyParserPlugin } from "./plugins/corsPlugin.js";
import { loggerPlugin } from "./plugins/loggerPlugin.js";
import { notFoundError, internalError } from "./controllers/errors/index.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
corsPlugin(app);
bodyParserPlugin(app);
loggerPlugin(app);

app.use(notFoundError);
app.use(internalError);

export default app;
