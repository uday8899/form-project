var mongoose = require("mongoose");
var formSchema = new mongoose.Schema({
   name : String,
   email : String,
   birth : String,
   number : String
});

module.exports = mongoose.model("Form",formSchema);