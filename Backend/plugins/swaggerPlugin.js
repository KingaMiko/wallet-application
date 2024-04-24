import swagger from "express-jsdoc-swagger";

export const swaggerPlugin = (app) => {
  const options = {
    info: {
      title: "Wallet",
      description: "Server REST API documentation for Wallet app",
      version: "1.0.0",
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html",
      },
    },
    security: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    baseDir: process.cwd(),
    filesPattern: ["./schemas/*.js", "./controllers/**/*.js"],
    swaggerUIPath: "/api-docs",
    exposeSwaggerUI: true,
    exposeApiDocs: false,
    notRequiredAsNullable: false,
  };

  swagger(app)(options);
};
