const User = require("./User")
const mongoose = require("mongoose")


const ExcersiseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number},
    sets: {type: Number},
    weight: {type: Number},
    userId: [{type: mongoose.Schema.Types.ObjectId ,ref : User}]
})

module.exports = mongoose.model("Excercise",ExcersiseSchema)