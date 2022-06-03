
const mongoose = require('mongoose');

mongoose.connect(
    // process.env.MONGO_DB || 'mongodb://localhost:27017/iti-25-jan-2021',
    process.env.MONGO_DB || 'mongodb://localhost:27017/iti-iot',
    (err) => {
    if(err) {
        console.warn("failed connection to dataBase")
        console.error(err);
        process.exit(1);
    }
    console.info("connected successfully to dataBase ");
});