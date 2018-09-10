const Users = require("./model.js");
// module.exports = {
//     home:home,
//     getUser:getUser,
//     createUser:createUser,
//     removeUser:removeUser
// }

module.exports = {
    home : (res,req) => Users.find({})
                        .then(data => console.log("root error")||res.json(data))
                        .catch(errs => console.log("root success")||res.json(errs)),
    getUser : (res,req) =>Users.find({_id : req.params.name})
                        .then(data => console.log("getUser error")||res.json(data))
                        .catch(errs => console.log("getUser success")||res.json(errs)),

    createUser : (res,req) => Users.create({name : req.params.name})
                                .then(data => console.log("createUser error")||res.json(data))
                                .catch(errs => console.log("createUser success")||res.json(errs)),
    removeUser : (res,req) => Users.remove({name : req.params.name})
                                .then(data => console.log("removeUser error")||res.json(data))
                                .catch(errs => console.log("removeUser success")||res.json(errs))
                                     
}
// function home(req, res){
//     console.log("root route");
    
//     Users.find({}, function(err, data){
//         if(err){
//            console.log("Returned error", err);
//             // respond with JSON
//            res.json({message: "Error", error: err})
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success", data: data})
//         }
//      })
// }

// function getUser(req,res){
//     console.log("get user route");
//     Users.find({name : req.params.name}, function(err,data){
//         if(err){
//             console.log("Can't get user data", err);
//             res.json({message : "Error", errpr : err})
//         }
//         else {
//             // respond with JSON
//            res.json({message: "Success", data: data})
//         }
//     })
// }

// function createUser(req,res){
//     console.log("create user route");
    
//     Users.create({name : req.params.name}, function(err,data){
//         if(err){
//             console.log("Can't create a new user");
//             res.json({message: "err create user data", error: err})
//         }else {
//             // respond with JSON
//            res.json({message: "Success create new user data", data: data})
//         }
//     })
// }

// function removeUser(req,res){
//     console.log("remove user route");
//     Users.remove({name : req.params.name}, function(err,data){
//         if(err){
//             console.log("Can't remove a user");
//             res.json({message: "err remove user data", error: err})
//         }else {
//             // respond with JSON
//            res.json({message: "Success remove user data", data: data})
//         }
//     })
// }

