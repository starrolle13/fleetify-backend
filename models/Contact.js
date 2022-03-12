// models/Bookmark.js
// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const Contact = mongoose.model('Contact', ContactSchema);

// export the newly created model
module.exports = Contact;
