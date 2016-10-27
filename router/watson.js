const router = require('express').Router();
const { pictureThis } = require('../services/watson');

router.post('/', getImage, pictureThis, (req, res) => {
  res.render('index', {
    watsonResults: res.watsonRes
  });
});

module.exports = router;
