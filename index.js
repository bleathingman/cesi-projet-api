const express = require('express');
const app = express();

const contacts = [
  {
    name: 'Toto Tata',
    email: 'toto@toto.com',
    phone: '0394838134',
  },
  {
    name: 'Titi Tutu',
    email: 'toto@toto.com',
    phone: '0394838134',
  },
];

// app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello Moi');
});
app.get('/contacts', function (req, res) {
  res.status(200).json(contacts);
}),
  app.listen(3002);
