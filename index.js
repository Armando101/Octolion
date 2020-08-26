const express = require('express');
const path = require('path');
const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');
const bodyParse = require('body-parser');

// app
const app = express();

// Middlewares
app.use(bodyParse.json());

// Colocamos la ruta static, cuando queramos acceder a algun recuso de public lo podemos hacer con /static
app.use("/static", express.static(path.join(__dirname, "public")));

// View engine setup
// app.set('views', path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use('/products', productsRouter);
app.use("/api/products", productsApiRouter);


// Redirect
app.get('/', function(req, res) {
    res.redirect('/products');
});

const server = app.listen(8000, function() {
    console.log(`Listening in http://localhost:${server.address().port}`);
});