import Db from '../commons/db';

let schema = {
    no: String,
    name: String,
    power: Number
};

let Monster = Db.model('Monster', schema);

export default Monster;