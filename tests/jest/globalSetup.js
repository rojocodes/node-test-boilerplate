
var {app} = require('../../app');              // define our app

var port = process.env.PORT||4000; 

module.exports = async () => {
    global.httpServer = await app.listen(port,()=>{
        console.log('Magic happens on port: ' + port);
    });
}