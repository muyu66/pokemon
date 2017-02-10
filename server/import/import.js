import Db from '../app/commons/db';

import monster_data from './data/monster';
import area_data from './data/area';

import Monster from '../app/models/monster';
import Player from '../app/models/player';
import User from '../app/models/user';
import PlayerMonster from '../app/models/player_monster';
import Area from '../app/models/area';

// 清空数据库
let databases = ['monsters', 'users', 'players', 'playermonsters', 'areas'];
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

// 导入 地图
area_data.forEach(function (data) {
        let area = new Area(data);
        area.save(function () {
            console.log('完成 导入 Pokemon ' + area.name);
        });
    }
);

let players1 = ['小智', '小广'];
createUser('aaa', '111', players1);

let players2 = ['小德', '小李广'];
createUser('ccc', '111', players2);

// 导入 用户
function createUser(account, password, players) {
    let user = new User({
        account: account,
        password: password,
    });
    user.save(function () {
        console.log('完成 导入 用户' + account);
        createPlayer(players, user);
    });
}

// 导入 玩家
function createPlayer(players, user) {
    players.forEach(function (player) {
            let model = new Player({
                name: player,
                user_id: user._id,
                position: { x: 1, y: 1 },
            });
            model.save(function () {
                console.log('完成 导入 玩家');
                createPlayerMonster(model, '001');
                createPlayerMonster(model, '002');
            });
        }
    );
}

// 导入 玩家 Pokemon 001
function createPlayerMonster(player, no) {
    Monster.findOne({ no: no }, '', function (err, model) {
        let player_monster = new PlayerMonster({
            player_id: player._id,
            monster_id: model._id,
            level: 1,
        });
        player_monster.save(function () {
            console.log('完成 导入 玩家 Pokemon ' + model.name);
        });
    });
}