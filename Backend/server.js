import cron from "node-cron";
import axios from "axios";
import { config } from "dotenv";

import app from "./app.js";
import { connectToMongo } from "./drivers/mongo.js";
import patterns from "#utils/regexPatterns.json" assert { type: "json" };

config();

async function startServer() {
  try {
    await connectToMongo();
    console.log("Database connection successful");
    global.cachedPatterns = patterns;
    app.listen(3000, function () {
      console.log("Server running. Use our API on port: 3000");
    });
  } catch (err) {
    console.log("Database connection failed, shutting down");
    console.error(err);
    process.exit(1);
  }
}

startServer();

cron.schedule("0 0 0 * * *", async () => {
  config();

  await axios.post(`${process.env.BASE_URL}/currencies`);
});

cron.schedule("*/15 * * * *", async () => {
  try {
    await axios.get(`${process.env.BASE_URL}/api/keep-alive`);
    console.log(`Keep-alive request sent: ${new Date().toISOString()}`);
  } catch (error) {
    console.error("Error sending keep-alive request:", error);
  }
});
