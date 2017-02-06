let Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/pokemon');
Mongoose.Promise = global.Promise;
let db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("MongoDB Opened!");
});

export default Mongoose;