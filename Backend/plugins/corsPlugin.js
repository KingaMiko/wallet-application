import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";

export const corsPlugin = (app) => {
  configDotenv();

  const originsArray = process.env.CORS_ORIGIN.split(" ");

  app.use(
    cors({
      origin: originsArray,
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );
};

export const bodyParserPlugin = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
