//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
// instantiate express
const app = express();
app.set('port', process.env.PORT || 8000);

//=============================================================================
// Middleware
//=============================================================================
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================
// Redirect
app.get('/', (req, res) => {
  res.redirect('/api/contacts');
});
/* START CONTROLLERS HERE */
const contactsController = require('./controllers/contactController');
app.use('/api/contacts/', contactsController);
/* END CONTROLLERS HERE */

//=============================================================================
// START SERVER
//=============================================================================
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
