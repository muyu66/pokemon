import Monster from '../app/models/monster';

let model = new Monster({ name: '水箭龟', power: 11 });

model.save();

console.log('完成');