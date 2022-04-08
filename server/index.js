require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config');

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

app.get('/api/product/', (req, res) => {
  const { id } = req.query;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/`, {
    headers: {
      Authorization: process.env.APIKEY,
    },
  })
    .catch((error) => {
      res.send(error);
    })
    .then((response) => {
      res.send(response.data);
    });
});

app.get('/api/product/styles', (req, res) => {
  const { id } = req.query;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`, {
    headers: {
      Authorization: process.env.APIKEY,
    },
  })
    .catch((error) => {
      res.send(error);
    })
    .then((response) => {
      res.send(response.data);
    });
});

/*
  Route to collect the current product id's relative id styles
  Postman example: products/[iterate through related id]/styles
*/
app.get('/api/products/related/styles', (req, res) => {
  const { id } = req.query;
  /* Get an array of IDs related to current product id */
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/related`, {
    headers: {
      Authorization: process.env.APIKEY,
    },
  })
    .catch((error) => {
      res.send(error);
    })
    .then((relatedProductIDsArr) => {
      /* Iterate through each related id and get their styles */
      const reqs = relatedProductIDsArr.data.map((singleRelatedID) => (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${singleRelatedID}/styles`, {
          headers: {
            Authorization: process.env.APIKEY,
          },
        })));
      /* Take multiple concurrent requests for related id styles */
      axios.all(reqs)
        /* Pass all axios calls at once instead of individually passing them */
        .then(axios.spread((...allData) => {
          const resData = allData.map((response) => response.data);
          res.send(resData);
        }))
        .catch((error) => {
          res.send(error);
        });
    });
});

/*
  Route to collect the current product id's relative id information
  Postman example: products/[iterate through related id]
*/
app.get('/api/products/related', (req, res) => {
  const { id } = req.query;
  /* Get an array of IDs related to current product id */
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/related`, {
    headers: {
      Authorization: process.env.APIKEY,
    },
  })
    .catch((error) => {
      res.send(error);
    })
    .then((relatedProductIDsArr) => {
      /* Iterate through each related id and get their product information */
      const reqs = relatedProductIDsArr.data.map((singleRelatedID) => (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${singleRelatedID}`, {
          headers: {
            Authorization: process.env.APIKEY,
          },
        })));
      /* Take multiple concurrent requests for related id information */
      axios.all(reqs)
        /* Pass all axios calls at once instead of individually passing them */
        .then(axios.spread((...allData) => {
          const resData = allData.map((response) => response.data);
          res.send(resData);
        }))
        .catch((error) => {
          res.send(error);
        });
    });
});

app.put('/api', (req, res) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/${req.body.path}`,
    headers: {
      Authorization: process.env.APIKEY,
    },
  };

  axios.put(options.url, {}, { headers: options.headers })
    .then(res.end())
    .catch((err) => new Error(err));
});

// image uploader stuff
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.use(formData.parse());

app.post('/image-upload', (req, res) => {
  const values = Object.values(req.files);
  const promises = values.map((image) => cloudinary.v2.uploader.upload(image.path));

  Promise.all(promises)
    .then((results) => res.send(results))
    .catch((err) => new Error(err));
});
