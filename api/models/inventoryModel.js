'use strict';
var mongoose = require('mongoose');
var collectionName = 'inventory';
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
    productId: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Inventory', InventorySchema, collectionName);