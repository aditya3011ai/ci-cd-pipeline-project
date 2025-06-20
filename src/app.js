const express = require('express');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('User API is running');
});

module.exports = app;