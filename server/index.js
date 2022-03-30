require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.static('client/dist'));

app.listen(port, () => { console.log('listening on port: ', port); });

app.get('/api', (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${req.body}`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${process.env.APIKEY}`,
    },
  };

  axios(options)
    .then((data) => res.send(data));
});
