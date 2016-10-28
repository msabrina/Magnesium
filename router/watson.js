const router = require('express').Router();
const { pictureThis } = require('../services/recognition');
const { getImage } = require('../services/images');



router.get('/', getImage, (req, res) => {
    console.log(res.image)
  res.render('index', {
    image: res.image,
  });
});

// router.get('/', pictureThis, (req, res) => {
//   res.render('index', {
//     watsonResults: res.watsonRes,
//   });
// });

// addToDatabase
router.get('/analyze', pictureThis, (req, res) => {
  res.json(res.watsonRes)
})

module.exports = router;
