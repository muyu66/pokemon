let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("MongoDB Opened!");
});
var Schema = mongoose.Schema;
var yourSchema = new Schema({
    name: String, gold: Number
});
yourSchema.statics.listByQuery(queryParams)
{
    var query = this.find(queryParams);
    return yield query.exec();
}
;
module.exports = yourSchema;