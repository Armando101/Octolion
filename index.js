const express = require('express');
const path = require('path');
const app = express();
const productsRouter = require('./routes/products');

// Colocamos la ruta static, cuando queramos acceder a algun recuso de public lo podemos hacer con /static
app.use("/static", express.static(path.join(__dirname, "public")));

// app.set('views', path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use('/products', productsRouter);

const server = app.listen(8000, function() {
    console.log(`Listening in http://localhost:${server.address().port}`);
});