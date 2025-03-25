const Excercise = require('./Excercise')
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    user: {type: String, required: true},
    date: {type: Date, required: true},
    duration: {type: Number, required: true},
    caloriesBurned: {type: Number, required: true},
    exercise: [{type: mongoose.Schema.Types.ObjectId ,ref : Excercise}]
})

module.exports = mongoose.model("User",UserSchema)