const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.get('/', (req, res) => {
  res.json(users.getAll());
});

router.post('/', (req, res) => {
  const user = users.add(req.body);
  res.status(201).json(user);
});

router.get('/:id', (req, res) => {
  const user = users.getById(req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

module.exports = router;