'use strict';
module.exports = function(app) {
  var orderCtrl = require('../controllers/orderController');
  var VerifyToken = require('../../auth/VerifyToken');
  // orderCtrl Routes
  app.route('/orders')
    .get(VerifyToken, orderCtrl.list_all_orders)
    .post(VerifyToken, orderCtrl.create_a_order);


  app.route('/orders/:orderId')
    .get(VerifyToken, orderCtrl.read_a_order)
    .put(VerifyToken, orderCtrl.update_a_order)
    .delete(VerifyToken, orderCtrl.delete_a_order);
};
