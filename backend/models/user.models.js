import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
        select : false,
    },
});


userSchema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

userSchema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = function generateJWT() {    
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
}

const User = mongoose.model("user", userSchema);

export default  User;