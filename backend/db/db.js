import mongoose from "mongoose";
import 'dotenv/config'; 

console.log(process.env.MONGODB_URI);

function connectToDatabase () {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
        console.error(error.stack);
    });
}

export default connectToDatabase;