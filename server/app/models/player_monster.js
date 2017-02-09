import Db from '../commons/db';
import Base from './base';

let schema = Object.assign(Base.schema, {
    player_id: String,
    monster_id: String,
    level: Number,
});

let PlayerMonster = Db.model('PlayerMonster', schema);

export default PlayerMonster;