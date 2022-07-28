const mongoose = require('mongoose');
const Schema = mongoose.Schema

const coursesSchema = new Schema({
    tags: [String],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number,

}) 

module.exports
 = mongoose.model('courses', coursesSchema);
