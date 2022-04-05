require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.static('client'));

app.listen(port, () => { console.log('listening on port: ', port); });

app.get('/api', (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${req.query.path}`,
    headers: {
      Authorization: process.env.APIKEY,
    },
  };

  axios(options)
    .then((response) => res.send(response.data));
});

app.post('/api', (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${req.body.path}`,
    headers: {
      Authorization: process.env.APIKEY,
    },
  };

  axios.post(options.url, req.body.query, { headers: options.headers })
    .then((reponse) => res.status(201).end(reponse.data));
});

app.put('/api', (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${req.body.path}`,
    headers: {
      Authorization: process.env.APIKEY,
    },
  };

  axios.put(options.url, {}, { headers: options.headers })
<<<<<<< HEAD
    .then(res.sendStatus(204));
  // .catch(res.sendStatus(500));
=======
    .then(res.sendStatus(204))
    .catch(res.sendStatus(500));
>>>>>>> 76ef0665e9464c4f03b5b2a4e53de89a3a65f04f
});
