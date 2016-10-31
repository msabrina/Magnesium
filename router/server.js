const serverRouter = require('express').Router();
const { pictureThis } = require('../services/recognition');
const { getImage } = require('../services/images');
const { imageThis } = require('../services/recognition');

const multer = require('multer');
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
// addToDatabase
// router.get('/analyze', pictureThis, (req, res) => {
//   res.render('index', {
//     watsonResponse: res.watsonRes
//   })
// })


// router.post('/upload', upload.single('upl'), function(req,res){
//   console.log(req.body); //form fields
//   /* example output:
//   { title: 'abc' }
//    */
//   console.log(req.file); //form files
//   /* example output:
//             { fieldname: 'upl',
//               originalname: 'grumpy.png',
//               encoding: '7bit',
//               mimetype: 'image/png',
//               destination: './uploads/',
//               filename: '436ec561793aa4dc475a88e84776b1b9',
//               path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
//               size: 277056 }
//    */
//   // res.status(204).end();
//   res.render('user', {
//     url: 'uploads/' + req.file.filename,
//   });
// });


// // <% image.forEach((image) => { %>


// // Acquired from codementor.io.

// router.post('/upload', upload.single('upl'), function(req,res){
//   console.log(req.body); //form fields
//   /* example output:
//   { title: 'abc' }
//    */
//   console.log(req.file); //form files
//   /* example output:
//             { fieldname: 'upl',
//               originalname: 'grumpy.png',
//               encoding: '7bit',
//               mimetype: 'image/png',
//               destination: './uploads/',
//               filename: '436ec561793aa4dc475a88e84776b1b9',
//               path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
//               size: 277056 }
//    */
//   // res.status(204).end();
//   res.send('done');
// });
