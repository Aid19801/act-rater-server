var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActSchema = new Schema({
    _id: { type: String, required: true, max: 100 },
    email: {type: String, required: true, max: 100},
    actName: {type: String, required: true, max: 100},
    realName: {type: String, required: true, max: 100},
    startDate: {type: String, required: true, max: 100},
    img: {type: String, required: true, max: 300},
    rating: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Act', ActSchema);