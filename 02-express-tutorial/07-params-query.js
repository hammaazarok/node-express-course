const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home</h1><a href="/api/products">Products</>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((prod) => {
    const { id, name, image } = prod;

    return { id, name, image };
  });

  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProd = products.find((prod) => prod.id === +productID);

  if (!singleProd) {
    return res.status(404).send('Product not found');
  }

  res.json(singleProd);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({
      success: true,
      data: 'No products matched',
    });
  }

  res.status(200).json(sortedProducts);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
