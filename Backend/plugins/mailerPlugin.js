import { configDotenv } from "dotenv";
import { createTransport } from "nodemailer";

configDotenv();

const server = {
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
};

export const sendVerificationMail = async (
  to,
  token,
  username = "new user"
) => {
  const verificationLink = process.env.BASE_URL + "/users/verify/" + token;

  const message = {
    from: "grzegorz.jozw@gmail.com",
    to,
    subject: "Wallet App: New User Verification",
    text:
      "Hello " +
      username +
      "!\n\nClick to verification link to verify your new account:\n\n" +
      verificationLink,
  };

  await createTransport(server).sendMail(message);
};
