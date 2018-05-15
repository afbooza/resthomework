'use strict';
module.exports = function(app) {
  var inventoryCtrl = require('../controllers/inventoryController');
  var VerifyToken = require('../../auth/VerifyToken');
  // orderCtrl Routes
  app.route('/inventory')
    .get(VerifyToken, inventoryCtrl.list_all_inventory)
    .post(VerifyToken, inventoryCtrl.create_a_inventory);

  app.route('/inventory/:inventoryId')
    .get(VerifyToken, inventoryCtrl.read_a_inventory)
    .put(VerifyToken, inventoryCtrl.update_a_inventory)
    .delete(VerifyToken, inventoryCtrl.delete_a_inventory);
};
