const mongoose = require("mongoose")
const Schema = mongoose.Schema

const toSchema = Schema({
title: {type: String, required: true},
userId: {type: mongoose.Schema.Types.Mixed}
})

module.exports = mongoose.model("todo", toSchema)
