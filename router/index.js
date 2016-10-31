const express = require('express');
const indexRouter = express.Router();


// const upload = multer({ dest: '../uploads/'});

// This is the route that serves your '/' homepage
indexRouter.get('/', (req, res) => {
  res.render('index');
});

// This route serves your `/login` form
indexRouter.get('/login', (req, res) => {
  res.render('login');
});

// This route serves your `/signup` form
indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = indexRouter;



// router.get('/', getImage, (req, res) => {
//   res.render('guest', {
//     allImages: res.images,
//   });
// });

// router.get('/analyze', pictureThis, addToDatabase, (req, res) => {
//   res.render('results', {
//     watsonResponse: res.watsonRes,
//   })
// })

// module.exports = router;



