require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 8080;
const isProduction = process.env.NODE_ENV === 'production';
const ROOT = process.env.NODE_ENV === 'production' ? 'build' : 'src';

app.use(cors());

app.get('/api/data', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, `/${ROOT}/assets/data`, 'data.json'));
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log('listening on port', port));
