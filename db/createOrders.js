db.createCollection('orders');

db.orders.insert({
    _id:1,
    productId: 1,
    count: 16,
    address: '123 street'
})