const mongoose = require("mongoose")

// import mongoose from "mongoose"

const signUpTemplate = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        // default:""
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('students2023', signUpTemplate)
