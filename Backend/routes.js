import { Router } from "express";

import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  const router = Router();

  router.post("/auth/signup", controllers.authSignup);
  router.post("/auth/signin", controllers.authSignin);
  router.get("/auth/logout", controllers.authLogout);

  router.post("/transactions", controllers.addTransaction);
  router.get("/transactions", controllers.getTransactions);

  router.get("/categories", controllers.getCategory);

  router.get("/statistics", controllers.getStatistics);

  router.get("/users/current", controllers.getUser);

  app.use("/api", router);
};
