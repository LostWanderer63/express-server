const express = require('express');

const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const welcomeRouter = require('./routes/welcome');

const app = express();
const PORT = 4000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.use('/orders', ordersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/welcome', welcomeRouter);

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
