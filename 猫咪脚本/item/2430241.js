function start() {
        im.gainItem(2430241, -1);
		im.gainItem(1702530, 1);// HP椅子
		im.gainItem(3012003, 1);// 爱心椅子
		im.gainItem(3010813, 1);// 爱情椅子
		im.gainItem(2000005, 300);// 超级药水
		im.gainItem(1042132, 1);// 超人衣服
		im.gainItem(1062098, 1);// 牛仔裤子
		im.gainItem(1112116, 1);
		im.gainNX(1,10);
		im.gainItem(2430505, 1);// 徽章BOSS
		im.gainItem(1112226, 1);//白云戒子
		im.gainItem(1002186, 1);//透明帽子
		im.gainItem(1012057, 1);//面具透明
		im.gainItem(1022048, 1);
		im.gainItem(1032024, 1);
		im.gainItem(5150040, 3);// 皇家理发
		im.gainItem(5152053, 3);// 皇家整容
		im.gainItem(5150052, 1);// 万能高级美发
		im.gainItem(5153015, 1);// 万能护肤
		im.gainItem(5152057, 1);// 万能高级整形
		im.gainItem(5211060, 1, 2 * 60 * 60 * 1000);// 三倍经验
		im.gainItem(5360015, 1, 2 * 60 * 60 * 1000);// 双爆
		//im.gainItem(5050000, 100);// 洗血的能力值
		im.gainItem(5072000, 10);// 高质地喇叭
		im.gainItem(5060000, 3);// 装备刻名 X3
		im.gainItem(2431092, 1);//
		im.gainItem(1112164, 1, 2 * 60 * 60 * 1000);//夏日甜心名片戒指 24小时
		im.gainItem(1112276, 1, 2 * 60 * 60 * 1000);//夏日甜心聊天戒指 24小时
		im.gainItem(1112918, 1, 1);// 回归戒指 X1 24小时
		im.gainItem(1302063, 1);// 火刀
		im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
		//im.worldSpouseMessage(0x20,"『新手驾到』：恭喜玩家 "+ im.getChar().getName() +" 来到了猫咪冒险岛。热烈祝贺他(她)吧。");
		im.dispose(); 
}
