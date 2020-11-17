const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const dotenv = require('dotenv')
const path = require('path')
var cors = require('cors')
dotenv.config()
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(express.static(path.join(__dirname, '../build')))

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'x-www-form-urlencoded');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.phone,
      body: req.body.message
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

const PORT = process.env.PORT | 3001

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);