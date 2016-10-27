const fetch = require('node-fetch');
require('dotenv').config();

const API_URL = 'https://gateway-a.watsonplatform.net/visual-recognition/api';

const pictureThis = (req, res, next) => {
  console.log(req.query);
  console.log(req.body); //getting from post
const jsonPostStuff = {
  method: 'POST',
  body: {
    api_key: process.env.WATSON_API,
    url: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx',
    owners: 'IBM,me',
    classifier_ids: 'default',
    threshold: '0',
    version: '2016-05-20',
  }
}

  fetch(API_URL, jsonPostStuff)
//  fetch( `${API_URL}term=${req.body.searchTerm}&entity=album&medium=music`)
  .then(r => r.json())
  .then((albums) => {
    res.results = result.results;
    next();
  })
  .catch((err) => {
    res.err = error;
    next();
  });
}

module.exports = { pictureThis };


// then(r => r.json()) r is our response object xhr object
// post request we get that body parser
