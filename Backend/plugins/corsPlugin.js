import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

export const corsPlugin = (app) => {
  const corsOptionsDelegate = (req, callback) => {
    configDotenv();

    const allowedArray = process.env.ALLOWED_DOMAINS.split(" ");
    const currOrigin = req.header("Origin");
    const currOriginIndex = allowedArray.indexOf(currOrigin);
    const corsOptions = {
      credentials: true,
      optionsSuccessStatus: 200,
    };

    if (currOriginIndex !== -1) {
      corsOptions.origin = true;
    } else {
      corsOptions.origin = false;
    }

    callback(null, corsOptions);
  };

  app.use(cors(corsOptionsDelegate));
};

export const bodyParserPlugin = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
