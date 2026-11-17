const express = require('express');

const app = express();
const PORT = 3000;

// Custom middleware function
const setUser = (req, res, next) => {
  req.user = 'Guest';
  next();
};

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Route where middleware is applied
app.get('/welcome', setUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
  console.log('Server is up and running on port 3000! Ready to handle requests.');
});
