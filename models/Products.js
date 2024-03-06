const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    qty : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    img : {
        type: String,
        required: true
    },
    status : {
        type: Number,
        default : 1
    },
})

const product = mongoose.model('product',productSchema)
module.exports = product