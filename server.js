const express = require('express');
const app = express();
// const nodemailer = require('nodemailer');
// const {google} = require('googleapis');
require('dotenv').config();
// const OAauth2 = google.auth.OAuth2;

// const OAauth2Client = new OAauth2(
//   process.env.GOOGLE_GMAIL_CLIENT_ID,
//   process.env.GOOGLE_GMAIL_CLIENT_SECRET,
//   process.env.GOOGLE_GMAIL_REDIRECT_URI,
// );

// OAauth2Client.setCredentials({
//   refresh_token: process.env.GOOGLE_GMAIL_REFRESH_TOKEN,
// })

// const accessToken = new Promise((resolve, reject) => {
//   OAauth2Client.getAccessToken((err, token) => {
//     if (err) reject(err)
//     resolve(token)
//   })
// }) 

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// set up rate limiter: maximum of five requests per minute
var rateLimit = require('express-rate-limit');
var limiter = rateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

// apply rate limiter to all requests
app.use(limiter);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

