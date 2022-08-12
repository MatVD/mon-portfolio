const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req, res) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 467,
    secure: true,
    auth: {
      user: 'mathieuvd64@gmail.com',
      pass: 'TY678//gtr23FGyu'
    }
  })

  const mailOption = {
    form: req.body.email,
    to: 'mathieuvd64@gmail.com',
    subject: `Message from ${req.body.email} - numero ${req.body.numero}: ${req.body.subject}`,
    text: req.body.message
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
