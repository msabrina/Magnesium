// set up node app porject
const express = require('express');
const logger = require('morgan');
const fetch = require('node-fetch');
const path = require('path');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
const { pictureThis } = require('./services/watson');

// const favorites = require('./models/favorites');
// const { saveFavoriteAlbum } = require('./models/favorites');
// const { getFavoriteAlbum } = require('./models/favorites');
// const { deleteAlbum } = require('./models/favorites');

// connect to routes

const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(logger('dev'));
app.listen(port, () => console.log('Server is listening on port', 3000));

// routes to routes js files
// app.get('/', getFavoriteAlbum, (req, res) => {
//   res.render('index', {
//     results: res.results || [],
//     favorites: res.favorites || []
//   });
// });

// app.post('/search', findMusicAlbums, getFavoriteAlbum, (req, res) => {
//   console.log(res.results);
//   res.render('index', {
//     results: res.results || [],
//     favorites: res.favorites || []
//   });
// });

// app.post('/favorites', saveFavoriteAlbum, (req, res) => {
//   res.redirect('/');
// });

// app.delete('/favorites/:id', deleteAlbum, (req, res) => {
//   res.redirect('/');
// });

//
