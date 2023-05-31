import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = 5000;

app.listen(port, function () {
  // console.log('Server running at http://localhost:'.concat(port));
});

// # sourceMappingURL=app.js.map
