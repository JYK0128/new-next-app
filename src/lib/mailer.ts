import nodemailer from "nodemailer";


export const mailer = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.GOOGLE_MAIL_USER,
    pass: process.env.GOOGLE_MAIL_PASS,
  },
});
