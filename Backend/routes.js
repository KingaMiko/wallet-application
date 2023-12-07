import { Router } from "express";

import { auth } from "./plugins/authPlugin.js";
import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  const rootRouter = Router();
  const usersRouter = Router();
  const authRouter = Router();

  authRouter.post("/signup", controllers.authSignup);
  authRouter.post("/signin", controllers.authSignin);
  authRouter.post("/refresh", controllers.authRefresh);
  authRouter.get("/logout", auth, controllers.authLogout);

  authRouter.get("/categories", auth, controllers.getAllUserCategories);
  authRouter.get("/categories/:id", auth, controllers.getUserCategoryById);
  authRouter.post("/categories", auth, controllers.createCategory);
  authRouter.delete("/categories/:id", auth, controllers.deleteUserCategory);

  rootRouter.post("/transactions", auth, controllers.addTransaction);
  rootRouter.get("/transactions", auth, controllers.getTransactions);
  rootRouter.get("/statistics", auth, controllers.getStatistics);
  rootRouter.get("/currencies", auth, controllers.getCurrencies);
  rootRouter.post("/currencies", controllers.updateCurrencies);
  rootRouter.get("/patterns", controllers.getPatterns);
  rootRouter.patch("/transactions/:id", auth, controllers.updateTransaction);
  rootRouter.delete("/transactions", auth, controllers.deleteTransaction);

  usersRouter.get("/current", auth, controllers.getUser);
  usersRouter.get("/verify/:verificationToken", controllers.verifyUser);

  app.use("/api", rootRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/users", usersRouter);
};
