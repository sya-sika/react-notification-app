#!bin/env node
const notifier = require('node-notifier');
const path = require('path');

//2019年の始まり
//1548946800000

//現在時刻
const nowTime = new Date(new Date().getTime());

//セットした時間
const endDt = new Date(new Date(2019,9,3,0,29,0,0).getTime());

/*
const timeone = new Date('2019/10/3 00:23:50');
const timetwo = new Date(timeone.getTime());
*/

//差分
const timeMinus =  endDt - nowTime;

setTimeout( () => {
    notifier.notify({
        'title': '最小限のnode-notifier',
        'icon': path.join(__dirname, '../node_nodules/holderJS/holder.js/20x20/random'),
        'message': 'Hello Notification!'
    });
   console.log(timeMinus);
}, timeMinus);

