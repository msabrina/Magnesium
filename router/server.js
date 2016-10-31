const serverRouter = require('express').Router();
const { pictureThis } = require('../services/recognition');
const { getImage } = require('../services/images');
const { imageThis } = require('../services/recognition');

// const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../uploads'))
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })
// const upload = multer({ storage: storage });
serverRouter.get('/analyze', getImage, (req, res) => {
    console.log('show me the prob!');
  res.json('/users/profile', { image: res.image });
});

serverRouter.get('/', getImage, pictureThis, (req, res) => {
  res.render('/users/profile', {
    image: res.image,
    watsonResults: res.watsonRes,
  });
});

module.exports = serverRouter;

