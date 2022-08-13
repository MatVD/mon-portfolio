const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const xoauth2 = require('xoauth2'); 

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: "134019100908-r89iub4q9cam7sl530qn07aji0iml1uo.apps.googleusercontent.com",
      clientSecret: "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",
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
      accessToken: "ya29.A0AVA9y1vGTBIZfKO17UItmLl7puaNIxwDcrStHt5rv54nDE_3-DSgCCTIZxNMj2svIG7YfctyYTOoWaR4CT-8fmAa11rXGrfaA5ge6wsuqr-djum9w_xqoEro9Eim54qyQ4jpyHSo6-6N-RaavzGif0xzatkhaCgYKATASATASFQE65dr8ms0DXKLFo6LxI0RBFC2R4g0163",
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
