
const {home,getUser,createUser,removeUser} = require("./controller.js");

function router(app)
{
    app.get('/',home);
    app.get('/new/:name/',createUser);
    app.get('/remove/:name/', removeUser);
    app.get('/:name/',getUser);
}

module.exports = router;

