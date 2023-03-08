const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// To-Do - Find npm package that will create unique ids

const { v4 } = require('uuid');

const userId=v4();
console.log(userId); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// routing
// module.exports = (router) => {
    // Note: GET /api/notes should read the db.json file and return all saved notes as JSON.
    router.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './db/db.json'));
      });
    // Note: POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    // router.post('/api/notes', (req, res) => {
    //     res.send('');
    //   });
// };

module.exports = router