import mongoose from "mongoose";
import 'dotenv/config'; 

function connectToDatabase () {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
        console.error(error.stack);
    });
}

export default connectToDatabase;