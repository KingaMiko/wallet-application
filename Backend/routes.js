import * as controllers from "./controllers/index.js";

export const setupRoutes = (app) => {
  app.post("/auth/signup", controllers.authSignup);
  app.post("/auth/signin", controllers.authSignin);
  app.get("/auth/logout", controllers.authLogout);

  app.post("/transactions", controllers.addTransaction);
  app.get("/transactions", controllers.getTransactions);

  app.get("/categories/:id", controllers.getCategory);

  app.get("/statistics", controllers.getStatistics);

  app.get("/users/current", controllers.getUser);
};
