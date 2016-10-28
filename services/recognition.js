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

const fs = require('fs');

const pictureThis = (req, res, next) => {
    const params = {
      url: req.query.url
    };
// acquired from IBM Watson.

  visual_recognition.classify(params, (err, watsonRes) => {
    res.watsonRes = watsonRes;
    next();
  });
}


const imageThis = (req, res, next) => {
  const params = {
  images_file: fs.createReadStream('../uploads/test.jpg')
};

visual_recognition.detectFaces(params,
  function(err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2));
  });
}


module.exports = {
  pictureThis,
  imageThis,
};


// then(r => r.json()) r is our response object xhr object
// post request we get that body parser
