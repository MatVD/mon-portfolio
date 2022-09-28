const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const {google} = require('googleapis');
require('dotenv').config();
const OAauth2 = google.auth.OAuth2;

const OAauth2Client = new OAauth2(
  process.env.GOOGLE_GMAIL_CLIENT_ID,
  process.env.GOOGLE_GMAIL_CLIENT_SECRET,
  process.env.GOOGLE_GMAIL_REDIRECT_URI,
);

OAauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_GMAIL_REFRESH_TOKEN,
})

const accessToken = new Promise((resolve, reject) => {
  OAauth2Client.getAccessToken((err, token) => {
    if (err) reject(err)
    resolve(token)
  })
}) 

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// // set up rate limiter: maximum of five requests per minute
// var RateLimit = require('express-rate-limit');
// var limiter = new RateLimit({
//   windowMs: 1*60*1000, // 1 minute
//   max: 5
// });

// // apply rate limiter to all requests
// app.use(limiter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      type: 'oauth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.GOOGLE_GMAIL_CLIENT_ID,
      accessToken,
      clientSecret: process.env.GOOGLE_GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_GMAIL_REFRESH_TOKEN 
    },
  });

  const mailOption = {
    form: req.body.email,
    to: process.env.EMAIL_USER,
    auth: {
      type: 'oauth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.GOOGLE_GMAIL_CLIENT_ID,
      accessToken,
      clientSecret: process.env.GOOGLE_GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_GMAIL_REFRESH_TOKEN 
    },
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: `
    Message de ${req.body.firstName}
    Objet: ${req.body.subject}
    ${req.body.message}
    ${req.body.numero}
    ${req.body.email}`
  }

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email send');
      res.send('success');
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

