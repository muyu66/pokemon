import Db from '../commons/db';
import Base from './base';

let schema = Object.assign(Base.schema, {
    account: String,
    password: String,
});

let User = Db.model('User', schema);

export default User;