import { Router } from "express";
import rateLimit from "express-rate-limit";

import { auth } from "./plugins/authPlugin.js";
import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  const rootRouter = Router();
  const usersRouter = Router();
  const authRouter = Router();

  const postLimiter = rateLimit({
    windowMs: 11 * 60 * 1000,
    max: 15,
    message: "Too many requests, please try again later.",
  });

  authRouter.post("/signup", controllers.authSignup);
  authRouter.post("/signin", controllers.authSignin);
  authRouter.post("/refresh", controllers.authRefresh);
  authRouter.get("/logout", auth, controllers.authLogout);

  rootRouter.get("/categories", auth, controllers.getAllUserCategories);
  rootRouter.get("/categories/:id", auth, controllers.getUserCategoryById);
  rootRouter.post("/categories", auth, postLimiter, controllers.createCategory);
  rootRouter.delete("/categories/:id", auth, controllers.deleteUserCategory);
  rootRouter.get("/keep-alive", controllers.keepAlive);

  rootRouter.post(
    "/transactions",
    auth,
    postLimiter,
    controllers.addTransaction
  );
  rootRouter.get("/transactions", auth, controllers.getTransactions);
  rootRouter.get("/statistics", auth, controllers.getStatistics);
  rootRouter.get("/currencies", auth, controllers.getCurrencies);
  rootRouter.post("/currencies", controllers.updateCurrencies);
  rootRouter.get("/patterns", controllers.getPatterns);
  rootRouter.patch("/transactions/:id", auth, controllers.updateTransaction);
  rootRouter.delete("/transactions/:id", auth, controllers.deleteTransaction);

  usersRouter.get("/current", auth, controllers.getUser);
  usersRouter.get("/verify/:verificationToken", controllers.verifyUser);

  app.use("/api", rootRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/users", usersRouter);
};
