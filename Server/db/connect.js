const mongoose = require('mongoose');

const connectDB = (uri) => {
    return mongoose.connect(uri);
}
console.log("conneted");

module.exports = connectDB;
