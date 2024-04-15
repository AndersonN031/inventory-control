const express = require('express')
const path = require('path')

const productRouter = require('./src/routes/product');

const rootRouter = require("./src/routes/index");
const methodOverride = require('method-override');


require("./config/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/products', productRouter);

app.get("/api", (req, res) => {
    res.json({ "products": ["productOne", "productTwo", "productThree"] })
})


app.listen(5000, () => {
    console.log("Conectado no servidor http://localhost:5000/")
})