const mongoose = require("mongoose")
const Schema = mongoose.Schema

const registerSchema = Schema({

    // id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true},
    password: {type: String, required: true}
},
    {timestamp: true}
)

module.exports = mongoose.model("register", registerSchema)

// module.exports = {
//     Register
// }