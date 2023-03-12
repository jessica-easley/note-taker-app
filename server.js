const express = require('express');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// const apiRoutes = require('./routes/apiRoutes');
const app = express();


// Port
const PORT = process.env.PORT || 3001

// UUID Code
// const userId=v4();
// console.log(userId); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use the routes
// app.use("/", htmlRoutes);
// Note: GET * should return the index.html file.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// app.use("/api", apiRoutes);
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

app.post('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      // console.log(req.body);
      // add uuid stuff here for unique ids
      req.body.id = uuidv4();
      // req.body.id = parsedData.length + 1
      parsedData.push(req.body);
      // writeToFile(file, parsedData);
      console.log(parsedData);
      fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to './db/db.json`)
    );
    };
  });
});
// app listener - starts the server
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
  });