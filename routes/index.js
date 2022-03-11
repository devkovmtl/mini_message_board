const express = require('express');
const router = express.Router();

const messages = [
  { text: 'Hi there!', user: 'Amando', added: new Date() },
  { text: 'Hello World!', user: 'Charles', added: new Date() },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini MessageBoard', messages });
});

/* GET New Message post */
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Mini MessageBoard' });
});

router.post('/new', (req, res, next) => {
  const { text, user } = req.body;
  const message = { text, user, added: new Date() };
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
