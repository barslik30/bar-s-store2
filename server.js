
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var  port = 3000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'statics')));

var card =[]
var total_price = 0;

app.get("/", (req, res) => {
  res.render("index", );
});
app.get("/home", (req, res) => {
  res.render("index",);
});
app.get("/menshopping", (req, res) => {
  res.render("menshopping",);
});
app.get("/womenshopping", (req, res) => {
  res.render("womenshopping",);
});
app.post("/add_card", (req, res) => {
  let sku = {
    name: req.body.product_name,
    price: parseInt(req.body.product_price),
  };
  card.push(sku);
  console.log(card)
  total_price+=sku.price;
  console.log(total_price)
  res.redirect("/home");
});

app.get("/checkout",(req,res)=> {
  res.render("checkout",{card:card,total_price:total_price});
});
app.get("/end",(req,res)=> {
  res.render("end",);
  res.redirect("/home");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});