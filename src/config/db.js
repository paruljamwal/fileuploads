const mongoose = require("mongoose")

const connect = () => {
    try {
        console.log("Succenfully conected ");
        return mongoose.connect("mongodb+srv://paru:paru@cluster0.xqgue.mongodb.net/fileuplod?retryWrites=true&w=majority");

    }
    catch (err) {
        console.log(err);
    }
}


module.exports = connect;

