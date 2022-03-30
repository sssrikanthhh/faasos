const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://masai:Project@cluster0.k3jqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    // return mongoose.connect("mongodb://127.0.0.1:27017/Unit4ConstructWeek");
}