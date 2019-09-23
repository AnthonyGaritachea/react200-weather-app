require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:userInput', (req, res) => {
  axios({
    url:`http://api.openweathermap.org/data/2.5/weather?q=${req.params.userInput}&APPID=${process.env.API_KEY}&units=imperial`,
    method: 'get'
  })
  .then((response) => {
    res.send(response.data);
  })
  .catch(() => {
    res.status(404).send('error');
  });
});

module.exports = app;