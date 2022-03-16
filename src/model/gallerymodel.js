
const mongoose = require("mongoose");
const user = require("./usermodel");


const gallerySchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
},
    {
        versionKey: false,
        timestamps: true
    });

const gallerymodel = mongoose.model("gallery", gallerySchema);

module.exports = gallerymodel;