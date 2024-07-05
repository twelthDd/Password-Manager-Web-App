const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({ 
    name: { 
        type: String,
        required: true,
    },
    username: { 
        type: String,
    },
    password: { 
        type: String,
        required: true,
    },
    website: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

const ItemModel = mongoose.model('Item', itemSchema);

module.exports = ItemModel;