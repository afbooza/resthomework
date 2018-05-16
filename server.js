var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/productModel'), //created model loading here
  Order = require('./api/models/orderModel'),
  Inventory = require('./api/models/inventoryModel'),
  bodyParser = require('body-parser');

//const DB_URL = process.env.DATABASE_URL;
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL);  
//MOVE TO CONFIG VARS process.env.MONGDB_URI

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var productRoutes = require('./api/routes/productRoutes'); //importing route
var orderRoutes = require('./api/routes/orderRoutes');
var inventoryRoutes = require('./api/routes/inventoryRoutes');
productRoutes(app); //register the route
orderRoutes(app);
inventoryRoutes(app);

app.listen(port);


console.log('RESTful API server started on: ' + port);