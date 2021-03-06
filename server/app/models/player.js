import Db from '../commons/db';
import Base from './base';

let schema = Object.assign(Base.schema, {
    name: String,
    user_id: String,
    position: Object,
});

let Player = Db.model('Player', schema);

export default Player;