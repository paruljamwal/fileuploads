const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    first_name: { type: String, require: true },

    last_name: { type: String, require: false },

    profile_pic: { type: String, require: true },

},

    {
        versionKey: false,

        timestamps: true
    }

);

const usermodel = mongoose.model("user", userSchema);

module.exports = usermodel;