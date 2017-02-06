import Db from '../commons/db';

let User = Db.model('User', { account: String, password: String });

export default User;