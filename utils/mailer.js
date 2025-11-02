"use strict";
require ('dotenv').config();
const nodemailer = require("nodemailer");

const {EMAIL, API_KEY} = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: 'Gmail',
  auth: {
    user: EMAIL,
    pass: API_KEY
  }
});
module.exports = transporter;  
