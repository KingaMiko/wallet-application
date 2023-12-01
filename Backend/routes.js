import { Router } from "express";

import { auth } from "./plugins/authPlugin.js";
import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  const router = Router();

  router.post("/signup", controllers.authSignup);
  /**
   * POST /api/signin
   */
  router.post("/signin", controllers.authSignin);
  /**
   * GET /api/logout
   * 
   * @security BearerAuth
   */
  router.get("/logout", auth, controllers.authLogout);

  /**
   * POST /api/transactions
   * 
   * @security BearerAuth
   */
  router.post("/transactions", auth, controllers.addTransaction);
  /**
   * GET /api/transactions
   * 
   * @security BearerAuth
   */
  router.get("/transactions", auth, controllers.getTransactions);

  /**
   * GET /api/categories/:id
   * 
   * @security BearerAuth
   */
  router.get("/categories/:id", auth, controllers.getCategory);

  /**
   * GET /api/statistics
   * 
   * @security BearerAuth
   */
  router.get("/statistics", auth, controllers.getStatistics);

  /**
   * GET /api/users/current
   * 
   * @security BearerAuth
   */
  router.get("/users/current", auth, controllers.getUser);

  app.use("/api", router);
};
