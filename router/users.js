const express      = require('express');
const { createUser }    = require('../models/user.js');
const { authenticate }   = require('../lib/auth');
const { pictureThis } = require('../services/recognition');
const { getImage } = require('../services/images');
const { imageThis } = require('../services/recognition');
const usersRouter = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', { user: res.user });
});

usersRouter.get('/profile', getImage, (req, res) => {
    console.log('show me the prob!');
  res.json('/users/profile', { image: res.image });
});

usersRouter.get('/profile', getImage, pictureThis, (req, res) => {
  res.render('/users/profile', {
    image: res.image,
    watsonResults: res.watsonRes,
  });
});

module.exports = usersRouter;
