import { Router } from "express";

import { auth } from "./plugins/authPlugin.js";
import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  const rootRouter = Router();
  const usersRouter = Router();

  rootRouter.post("/signup", controllers.authSignup);
  rootRouter.post("/signin", controllers.authSignin);
  rootRouter.get("/logout", auth, controllers.authLogout);
  rootRouter.post("/transactions", auth, controllers.addTransaction);
  rootRouter.get("/transactions", auth, controllers.getTransactions);
  rootRouter.get("/categories", auth, controllers.getCategory);
  rootRouter.get("/statistics", auth, controllers.getStatistics);

  usersRouter.get("/current", auth, controllers.getUser);
  usersRouter.get("/verify/:verificationToken", controllers.verifyUser);

  app.use("/api", rootRouter);
  app.use("/api/users", usersRouter);
};
