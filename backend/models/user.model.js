import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 30
    },
    email:{
        type: String,
        required: [true,'User Email is required'],
        uniqure: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/,'Please fill a valaid email']
    },
    password: {
        type: String,
        required: [true,'User password is required'],
        minLength: 6
    },
    profilePictures: {
        type: String
    },
    bio: {
        type: String,
        default: ''
    }
},{ timestamps: true });

const User = mongoose.model('User',userSchema);

export default User;

