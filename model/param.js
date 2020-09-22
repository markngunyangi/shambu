const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//SERVICE SCHEMA
const paramSchema = new Schema({
    paramCategory: {
        type: String,
        required: true
    },
    paramTitle: {
        type: String,
        required: true
    },
    paramPrice: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('Param', paramSchema);