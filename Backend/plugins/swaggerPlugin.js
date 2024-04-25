import swagger from "express-jsdoc-swagger";

const dateSchema = {
  type: "string",
  pattern: "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)\\d{2}$",
  description: "Date in DD/MM/YYYY format",
};

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
    components: {
      schemas: {
        date: dateSchema,
      },
    },
  };

  swagger(app)(options);
};
