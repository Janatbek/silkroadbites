const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  console.log('index.html');
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/order', (req, res) => {
  console.log('order');
  res.sendFile(path.join(__dirname + '/about.html'));
  //
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
