const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/1955api", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db 1955api"));


const PeopleSchema = new goose.Schema({
    name : {
        type: String,
        required : true,
        minlength : 2
    }
},{timestamps : true});


const Users = goose.model('People', PeopleSchema);
module.exports = {Users};