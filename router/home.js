const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: '../uploads/'});
// const { pictureThis } = require('../services/watson');
// const { getImage } = require('../services/watson');


// router.get('/', getImage, (req, res) => {
//   res.render('index', {
//     allImages: res.images,
//   });
// });

// router.get('/analyze', pictureThis, addToDatabase, (req, res) => {
//   res.render('results', {
//     watsonResponse: res.watsonRes,
//   })
// })

// module.exports = router;


// <% image.forEach((image) => { %>
router.get('/', ((req, res) => {
  res.render('index');
})
);

// Acquired from codementor.io.

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
  res.send('done');
});
