const path = require('path');
const router = require('express').Router();

// routing
// module.exports = (app) => {

  // Note: GET /notes should return the notes.html file.
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // Note: GET * should return the index.html file.
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
// };

module.exports = router