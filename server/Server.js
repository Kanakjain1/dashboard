const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const schemaModel = require("./Data")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/dashboardapp")

app.get("/getDashboardData", (req, res) =>{
//    console.log("res"+res)
//     schemaModel.find()
//     .then(dashboard=>{
//         console.log("res"+dashboard)
//         res.json("[{\"name\":\"Aman\",\"designation\":\"Engineer\"},{\"name\":\"Mahak\",\"designation\":\"Engineer\"}]")})
//     .catch(err=>res.json(err))
        return "abc"
})

app.listen(3001, ()=>{
    console.log("Server is Running");
})