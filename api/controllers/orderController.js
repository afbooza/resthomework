'use strict';

var mongoose = require('mongoose'),
  Order = mongoose.model('Order'),
  Inventory = mongoose.model('Inventory');

exports.list_all_orders = function(req, res) {
    Order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

//Subtracts the count from the inventory, creates a new order record
//TODO: check if productId from order exists in inventory - give err message
exports.create_a_order = function(req, res) {
  Inventory.update({productId: req.body.productId}, {$inc:{count:-req.body.count}}, (err, inventory) =>{
    if(err) {
      res.send(err);
    } else{
      res.send(inventory);
    }
  }); 
  var new_order = new Order(
    {
      productId: req.body.productId,
      count:req.body.count,
      address:req.body.address
    });
  new_order.save(function(err, order) {
    if (err){
      res.send(err);
    }
    else{
      res.json(order);
    }
  });
};


exports.read_a_order = function(req, res) {
  console.log(req.params.orderId);
  Order.findById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.update_a_order = function(req, res) {
  Order.findOneAndUpdate({_id: req.params.orderId}, {$set:{
    productId:req.body.productId,
    count: req.body.count,
    address:req.body.address}}, {new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

//Adds count to the inventory, removes existing order object
exports.delete_a_order = function(req, res) {
  Order.findById(req.params.orderId, function(err, order) {
    if (err) {
      res.send(err);
    }else{
      //update Inventory with found order
      Inventory.update({productId: order.productId}, {$inc:{count:order.count}}, (err, inventory) =>{
        if(err) {
          res.send(err);
        } else{
          console.log(inventory);
          res.send(inventory);
        }
      }); 
      //remove found order
      Order.remove({
        _id: order._id
      }, function(err, order) {
        if (err){ 
          res.send(err);
        }else{
        res.json({ message: 'Order successfully deleted',
          order:order,
          req: req.params });
        }
      });
    }
  }); 
  
};

