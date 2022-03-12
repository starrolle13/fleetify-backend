//controllers/bookmarksController.js
// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the bookmark model
const Contact = require('../models/Contact');

// Add routes to the router object
// Index: GET all the bookmarks
router.get('/', (req, res, next) => {
  // 1. Get all of the bookmarks from the DB
  Contact.find({})
    // 2. Send them back to the client as JSON
    .then((contacts) => res.json(contacts))
    // 3. If there's an error pass it on!
    .catch(next);
});

router.get('/:id', async (req, res, next) => {
  try {
    // 1. Find the Bookmark by its unique ID
    const contacts = await Contact.findById(req.params.id);
    // 2. Send it back to the client as JSON
    res.json(contacts);
  } catch (err) {
    // if there's an error, pass it on!
    next(err);
  }
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
