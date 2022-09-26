const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
// const xoauth2 = require('xoauth2'); 

// console.log(xoauth2)

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
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOption = {
    form: req.body.email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: `
    Message de ${req.body.firstName}
    Objet: ${req.body.subject}
    ${req.body.message}
    ${req.body.numero}
    ${req.body.email}`,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
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

