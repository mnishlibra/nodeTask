const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const connectDb = mongoose.connect(process.env.MONGO_URL,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

module.exports = connectDb;

