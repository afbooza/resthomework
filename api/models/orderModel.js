'use strict';
var mongoose = require('mongoose');
var collectionName = 'orders';
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema, collectionName);