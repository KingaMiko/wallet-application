import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const corsPlugin = (app) => {
  const corsOptionsDelegate = (req, callback) => {
    const allowedDomains = process.env.ALLOWED_DOMAINS.split(" ");
    const currOrigin = req.header("Origin");

    const corsOptions = {
      credentials: true,
      optionsSuccessStatus: 200,
    };

    if (allowedDomains.includes(currOrigin)) {
      corsOptions.origin = currOrigin;
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
