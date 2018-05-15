var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/productModel'), //created model loading here
  Order = require('./api/models/orderModel'),
  Inventory = require('./api/models/inventoryModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://afbusa:afb123@ds225010.mlab.com:25010/api-secure');  //afbusa, afb123


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var productRoutes = require('./api/routes/productRoutes'); //importing route
var orderRoutes = require('./api/routes/orderRoutes');
var inventoryRoutes = require('./api/routes/inventoryRoutes');
productRoutes(app); //register the route
orderRoutes(app);
inventoryRoutes(app);

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);