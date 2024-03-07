const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name: String,
    designation: String

})
const schemaModel = mongoose.model("user", schema)
module.exports = schemaModel
