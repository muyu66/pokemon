import Db from '../commons/db';
import Base from './base';

let schema = Object.assign(Base.schema, {
    name: String,
    position: Object,
    monster_ids: Array,
});

let Area = Db.model('Area', schema);

export default Area;