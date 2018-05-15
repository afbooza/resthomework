'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  price: {
    type: Number,
    required: true
  },
  productName:{
      type:String,
      required: true
  },
  type: {
    type: [{
      type: String,
      enum: ['Jewelry', 'Shoes', 'Mens'],
      required: true
    }]
  }
});



module.exports = mongoose.model('Products', ProductSchema);