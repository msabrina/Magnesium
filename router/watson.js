const router = require('express').Router();
const { pictureThis } = require('../services/recognition');
const { getImage } = require('../services/images');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage });


router.get('/', getImage, (req, res) => {
    console.log(res.image)
  res.render('index', {
    image: res.image,
  });
});

router.get('/', pictureThis, (req, res) => {
  res.render('index', {
    watsonResults: res.watsonRes,
  });
});

// addToDatabase
router.get('/analyze', pictureThis, (req, res) => {
  res.render('rec', {
    watsonResponse: res.watsonRes,
  })
})

router.post('/upload', upload.single('upl'), function(req,res){
  console.log(req.body); //form fields
  /* example output:
  { title: 'abc' }
   */
  console.log(req.file); //form files
  /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
   */
  // res.status(204).end();
  res.render('done', {
    url: 'uploads/' + req.file.filename,
  });
});

module.exports = router;
