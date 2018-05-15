'use strict';
module.exports = function(app) {
  var productCtrl = require('../controllers/productController');
  var VerifyToken = require('../../auth/VerifyToken');
  // productCtrl Routes
  app.route('/products')
    .get(VerifyToken, productCtrl.list_all_products)
    .post(VerifyToken, productCtrl.create_a_product);


  app.route('/products/:productId')
    .get(VerifyToken, productCtrl.read_a_product)
    .put(VerifyToken, productCtrl.update_a_product)
    .delete(VerifyToken, productCtrl.delete_a_product);
};
