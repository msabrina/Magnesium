const { MongoClient, ObjectID } = require('mongodb');

// do your db stuff here
const dbConnection = 'mongodb://localhost:27017/itunescrud';

function selectedImages(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
// this needs to be a query so I can pass the link to Watson API
    db.collection('selected')
    .insert(req.query. , (insertErr, result) => {
      if (insertErr) return next(insertErr);

      res.saved = result;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}


function saveFavoriteAlbum(req, res, next) {
  const insertObj = {
    ownerId: req.session.userId,

    // from a form with a GET method OR from query parameters
    // in the URL example: http://mango.com?hello=world
    artistName: req.query.hello,

    // from a form with a POST method
    collectionName: req.body.key,

    // app.get('/:salutation')
    // from the URL itself. Example: http://ga.com/hello
    // req.params.salutation

    // app.get('/:id')
    // Example: http://ga.com/hello
    // req.params.id
    artworkUrl100: req.params.id,
  };

  MongoClient.connect(dbConnection, (err, db) => {
    console.log('THIS IS BODY' + req.body.favorite)
    if (err) return next(err);
    db.collection('favorites')
      .insert(req.body.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

function deleteAlbum(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
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

module.exports = { getFavoriteAlbum, saveFavoriteAlbum, deleteAlbum };
