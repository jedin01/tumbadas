const express = require('express');
const path = require('path');
const router = express.Router();

// Landing page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// /conta
router.get('/conta', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'conta', 'index.html'));
});

// /explorar
router.get('/explorar', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'explorar', 'index.html'));
});

// /home
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'home', 'index.html'));
});

module.exports = router;