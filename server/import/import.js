import Db from '../app/commons/db';

import Monster from '../app/models/monster';

// 清空数据库
Db.connection.collection('monsters').drop(function (err) {
    if (err) console.log(err);
    console.log('Monster Drop')
});

let model = new Monster({ no: '001', name: '水箭龟', power: 11 });

model.save(function () {
    console.log('完成');
});