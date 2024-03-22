require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/db")

const productJson = require("./jsondata.json"); 
 
const start = async () => {
    try {

        // console.log("Connecting to the database...");
        await connectDB(process.env.MONGODB_URL);
        // console.log("Database connected.");

        await product.deleteMany(); // it will delete privious data from database
        // console.log("Creating products...");
        await product.create(productJson);
        // console.log("Products created successfully.");

        // console.log("success");
    } catch (error) {
        console.error("Error:", error);
    }
}


start();