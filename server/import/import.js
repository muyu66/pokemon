import Db from '../app/commons/db';

import monster_data from './data/monster';

import Monster from '../app/models/monster';
import Player from '../app/models/player';
import User from '../app/models/user';
import PlayerMonster from '../app/models/player_monster';

// 清空数据库
let databases = ['monsters', 'users', 'players', 'playermonsters'];
databases.forEach(function (database) {
        Db.connection.collection(database).drop(function (err) {
            if (err) console.log(err);
            console.log('Drop ' + database)
        });
    }
);

// 导入 Pokemon
monster_data.forEach(function (data) {
        let monster = new Monster(data);
        monster.save(function () {
            console.log('完成 导入 Pokemon ' + monster.name);
        });
    }
);

// 导入 用户
let user = new User({
    account: 'aaa',
    password: '111',
});
user.save(function () {
    console.log('完成 导入 用户');
});

let roles = ['小智', '小广'];
roles.forEach(function (role) {
        // 导入 玩家
        let player = new Player({
            name: role,
            user_id: user._id,
        });
        player.save(function () {
            console.log('完成 导入 玩家');

            // 导入 玩家 Pokemon 001
            Monster.findOne({ no: '001' }, '', function (err, model) {
                let player_monster = new PlayerMonster({
                    player_id: player._id,
                    monster_id: model._id,
                    level: 1,
                });
                player_monster.save(function () {
                    console.log('完成 导入 玩家 Pokemon ' + model.name);
                });
            });
        });
    }
);