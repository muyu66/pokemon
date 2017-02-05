import Db from '../commons/db';

let Monster = Db.model('Monster', { name: String, no: Number });

module.exports = Monster;