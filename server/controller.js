module.exports = {
    home:home,
    getUser:getUser,
    createUser:createUser,
    removeUser:removeUser
}

const {Users} = require("./model.js");
function home(req, res){
    console.log("root route");
    
    Users.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: data})
        }
     })
}

function getUser(req,res){
    console.log("get user route");
    Users.find({name : req.params.name}, function(err,data){
        if(err){
            console.log("Can't get user data", err);
            res.json({message : "Error", errpr : err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: data})
        }
    })
}

function createUser(req,res){
    console.log("create user route");
    
    Users.create({name : req.params.name}, function(err,data){
        if(err){
            console.log("Can't create a new user");
            res.json({message: "err create user data", error: err})
        }else {
            // respond with JSON
           res.json({message: "Success create new user data", data: data})
        }
    })
}

function removeUser(req,res){
    console.log("remove user route");
    Users.remove({name : req.params.name}, function(err,data){
        if(err){
            console.log("Can't remove a user");
            res.json({message: "err remove user data", error: err})
        }else {
            // respond with JSON
           res.json({message: "Success remove user data", data: data})
        }
    })
}

