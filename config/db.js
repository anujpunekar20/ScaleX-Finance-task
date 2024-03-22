const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: '../config.env'});

const connectDB = async () =>{
    const db = process.env.MONGODB_URI ? process.env.MONGODB_URI.replace('<password>', process.env.MONGODB_PASSWORD) : '';
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB is connected');
    } catch (err) {
        console.log(err.messsage);
        process.exit(1);
    }
}

module.exports = connectDB;
