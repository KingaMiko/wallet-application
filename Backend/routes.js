import { Router } from "express";

import { auth } from "./plugins/authPlugin.js";
import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  const rootRouter = Router();
  const usersRouter = Router();

  rootRouter.post("/signup", controllers.authSignup);
  rootRouter.post("/signin", controllers.authSignin);
  /**
   * GET /api/logout
   * 
   * @security BearerAuth
   */
  rootRouter.get("/logout", auth, controllers.authLogout);

  /**
   * POST /api/transactions
   * 
   * @security BearerAuth
   */
  rootRouter.post("/transactions", auth, controllers.addTransaction);
  /**
   * GET /api/transactions
   * 
   * @security BearerAuth
   */
  rootRouter.get("/transactions", auth, controllers.getTransactions);

  /**
   * GET /api/categories/:id
   * 
   * @security BearerAuth
   */
  rootRouter.get("/categories/:id", auth, controllers.getCategory);

  /**
   * GET /api/statistics
   * 
   * @security BearerAuth
   */
  rootRouter.get("/statistics", auth, controllers.getStatistics);

  /**
   * GET /api/users/current
   * 
   * @security BearerAuth
   */
  usersRouter.get("/current", auth, controllers.getUser);
  usersRouter.get("/verify/:verificationToken", controllers.verifyUser);

  app.use("/api", rootRouter);
  app.use("/api/users", usersRouter);
};
