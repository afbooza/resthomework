'use strict';

var mongoose = require('mongoose'),
  Inventory = mongoose.model('Inventory');

exports.list_all_inventory = function(req, res) {
    Inventory.find({}, function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};

//Can you have multiple inventories with the same product Id - as of now = yes
exports.create_a_inventory = function(req, res) {
  var new_inventory = new Inventory(req.body);
  if(req.body.productId)
    new_inventory.save(function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};


exports.read_a_inventory = function(req, res) {
    Inventory.findById(req.params.inventoryId, function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};


exports.update_a_inventory = function(req, res) {
    Inventory.findOneAndUpdate({_id: req.params.inventoryId}, 
      {$set:{
        productId:req.body.productId,
        count: req.body.count}}, {new: true}, function(err, inventory) {
    if (err){
      res.send(err);
    }else{
      res.json(inventory);
    }
  });
};


exports.delete_a_inventory = function(req, res) {
    Inventory.remove({
    _id: req.params.inventoryId
  }, function(err, inventory) {
    if (err)
      res.send(err);
    res.json({ message: 'Inventory successfully deleted' });
  });
};

