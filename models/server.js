const { MongoClient, ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');

const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/images';


function getFavorites(req, res, next) {
  // find all favorites for your userId(this was a bug..
  // should have been ownerId bc that's how its saved in the db)
  getDB().then((db) => {
    db.collection('favorites')
      .find({ ownerId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        res.favorites = data;
        console.log('data **** ', data);
        db.close();
        next();
      });
      return false;
  });
  return false;
}


function saveSelected(req, res, next) {
  const insertObj = {
    ownerId: req.session.userId,
    // from a form with a GET method OR from query parameters
    // in the URL example: http://mango.com?hello=world
    imageUrl: req.body.url,
  };
    // from a form with a POST method
    // collectionName: req.body.key,

    // app.get('/:salutation')
    // from the URL itself. Example: http://ga.com/hello
    // req.params.salutation

    // app.get('/:id')
    // Example: http://ga.com/hello
    // req.params.id
    // artworkUrl100: req.params.id,
  getDB().then((db) => {
    db.collection('favorites')
      .insert(insertObj, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      res.favorites = result;
      db.close();
      return next();
      });
    return false;
  });
  return false;
}

function deleteSelected(req, res, next) {
  getDB((err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.body.id) }, (removeErr, doc) => {
        if (removeErr) return next(removeErr);
        // return the data
        res.removed = doc;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

module.exports = { getFavorites, saveSelected, deleteSelected };
