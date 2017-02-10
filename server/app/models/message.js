import Db from '../commons/db';
import Base from './base';

let schema = Object.assign(Base.schema, {
    from: String,
    to: String,
    title: String,
    content: String,
    type: String,
});

let Message = Db.model('Message', schema);

export default Message;