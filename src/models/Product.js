 const mongoose = require('mongoose');
 const mongoosePaginate = require('mongoose-paginate');

 const ProductSchema = new mongoose.Schema({ 
   title: {
     type: String,
     required: true,
   },
   category: {
     type: String,
     required:true,
   },
   description: {
     type: String,
     required: true,
   },
   url: {
     type: String,
     required: true,
   },
   //armazena a data em que o produto foi criado  
   createdAt: {
     type: Date,
     default: Date.now,
     required: false,
   }
  });

ProductSchema.plugin(mongoosePaginate);  
module.exports = mongoose.model('Product', ProductSchema);