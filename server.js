const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const dotenv = require('dotenv')
const User = require("./models/User")
const Excercise = require("./models/Excercise")
const PORT  = process.env.PORT
const app = express()

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, async (req,res) => {

        if (response.ok){
            console.log('mongo connected')
        }
        console.log('not connected', err)
    
})

app.post('/user', async (req,res) => {
    const {user,date,duration,caloriesBurned} = req.body

    if (!user | !date | !duration | !caloriesBurned ){
        res.status(400).json({
            "error" : `Validation failed: is required`
        })
    }

    const newUser = await new User.Create({
        user,
        date,
        duration,
        caloriesBurned
    })

    res.status(200).json(newUser)
})

app.post('/user/:id', async (req,res) => {
    const userId = req.params

    const {name , reps , sets , weight} = req.body 

    if (!name | !reps | !sets | !weight){
        res.status(400).json("Validation failed: is required")
    }

    const newEx = await Excercise.Create([$push, {userId, Excercise: Excercise._id}])

    res.status(200).json(newEx)
})

app.get('/user/:id', async (req,res) => {
    const Id = req.params

    const workout = await User.findById(Id)

    if (!workout){
        res.status(404).json("Workout not found")
    }

    res.status(200).json(workout)
})

app.delete('/user/:id', async (req,res) => {
    const Id = req.params

    const workout = await User.findByIdAndDelete(Id)

    if (!workout){
        res.status(404).json("Something went wrong")
    }

    res.status(200).json(workout)
})

app.listen(PORT , () => {
    console.log(`server rinning at port 5000`)
})