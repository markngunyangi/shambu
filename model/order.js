const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      
    }
  ],
  
});

module.exports = mongoose.model('Order', orderSchema);
