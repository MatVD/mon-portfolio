const express = require('express');
const app = express();
require('dotenv').config();

// Init emailjs: form to email //
const emailjs = require('@emailjs/browser');
(function () {
  emailjs.init("e3qWue0PA6EGrmfWx");
})();

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



