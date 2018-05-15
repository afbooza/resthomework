db.createCollection('products');

db.products.insert([
    {
        price: '$10.00',
        product_name:'Black T-Shirt',
        type:'Mens',
        product_id:1
    },
    {
        price: '$10.00',
        product_name:'White T-Shirt',
        type:'Mens',
        product_id:2
    },
    {
        price: '$20.00',
        product_name:'Black Pants',
        type:'Womens',
        product_id:3
    },
    {
        price: '$20.00',
        product_name:'Black Shoes',
        type:'Shoes',
        product_id:4
    },
    {
        price: '$30.00',
        product_name:'Gold Necklace',
        type:'Jewelry',
        product_id:5
    },
    {
        price: '$15.00',
        product_name:'White Shoes',
        type:'Shoes',
        product_id:6
    }]
)