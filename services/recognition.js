const fetch = require('node-fetch');
require('dotenv').config();

const API_URL = 'https://gateway-a.watsonplatform.net/visual-recognition/api';
const API_KEY = process.env.WATSON_API;

const watson = require('watson-developer-cloud');
// const fs = require('fs');

const visual_recognition = watson.visual_recognition({
  api_key: API_KEY,
  version: 'v3',
  version_date: '2016-05-20'
});

const pictureThis = (req, res, next) => {
    const params = {
      url: req.query.url
    };
// acquired from IBM Watson.

  visual_recognition.classify(params, function(err, watsonRes) {
    res.watsonRes = watsonRes;
    next();
  });
};


module.exports = { pictureThis };


// then(r => r.json()) r is our response object xhr object
// post request we get that body parser
