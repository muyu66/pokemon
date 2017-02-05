import Db from '../commons/db';

let Player = Db.model('Player', { name: String, gold: Number });

module.exports = Player;