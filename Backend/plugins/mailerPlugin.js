import { configDotenv } from "dotenv";
import { createTransport } from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const loadTemplate = (templateName, data) => {
  const filePath = path.join(
    __dirname,
    "..",
    "templates",
    `${templateName}.hbs`
  );
  const source = fs.readFileSync(filePath, "utf-8");
  const template = handlebars.compile(source);
  return template(data);
};

configDotenv();

const server = {
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDGRID_API_KEYNAME,
    pass: process.env.SENDGRID_API_KEY,
  },
};

export const sendVerificationMail = async (
  to,
  token,
  username = "new user"
) => {
  const verificationLink = `${process.env.BASE_URL}/users/verify/${token}`;

  const emailContent = loadTemplate("verificationEmail", {
    verificationUrl: verificationLink,
    username: username,
  });

  const message = {
    from: "welcome.to.your.wallet@gmail.com",
    to,
    subject: "Wallet App: New User Verification",
    html: emailContent,
  };

  await createTransport(server).sendMail(message);
};
