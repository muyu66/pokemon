import Db from '../commons/db';
import Base from './base';

let schema = Object.assign(Base.schema, {
    no: String,
    name: String,
    attribute: String,
    classification: String,
    characteristic_id: String,
    height: Number,
    weight: Number,
});

let Monster = Db.model('Monster', schema);

export default Monster;