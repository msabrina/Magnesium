// set up node app porject
const dotEnv = require('dotenv').config({silent: true});
const express = require('express');
const logger = require('morgan');
const fetch = require('node-fetch');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const multer = require('multer');

const app = express();
const SECRET = 'tacos3000';
const port = process.argv[2] || process.env.PORT || 3000;

const indexRouter = require('./router/index');
const authRouter = require('./router/auth');
const usersRouter = require('./router/users');
const serverRouter = require('./router/server');


const upload = multer({ dest: 'uploads/' });
const { pictureThis } = require('./services/recognition');

// const favorites = require('./models/favorites');
// const { saveFavoriteAlbum } = require('./models/favorites');
// const { getFavoriteAlbum } = require('./models/favorites');
// const { deleteAlbum } = require('./models/favorites');

// connect to routes

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.listen(port, () => console.log('Server is listening on port', 3000));


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/server', serverRouter);
// routes to routes js files
// app.get('/', getFavoriteAlbum, (req, res) => {
//   res.render('index', {
//     results: res.results || [],
//     favorites: res.favorites || []
//   });
// });

// app.post('/upload', upload.single('test'), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
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
