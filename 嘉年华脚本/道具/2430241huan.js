function start() {
        im.gainItem(2430241, -1);
		im.gainItem(1142950, 1);// 2016猴年勋章
		im.gainItem(1003552, 1);// 专属紫金枫叶黄金帽
		im.gainItem(1082433, 1);// 专属紫金枫叶手套
		im.gainItem(1052461, 1);// 专属紫金枫叶套装
		im.gainItem(1102441, 1);// 专属紫金枫叶披风
		im.gainItem(1072666, 1);// 专属紫金枫叶鞋
		im.gainItem(1132154, 1);// 专属紫金枫叶腰带
		im.gainItem(1152089, 1);// 专属紫金枫叶肩章
		im.gainItem(5030008, 1);// 小甜甜商人: 7日权
		im.gainItem(3012003, 1);// 爱心椅子
		im.gainItem(3010583, 1);// 蛇椅子
		im.gainItem(2000019, 200);// 超级药水
		im.gainItem(1072153, 1);// 透明鞋
		im.gainItem(1082170, 1);// 粉色电子表
		im.gainItem(1102214, 1);// 品克缤气球
		im.gainItem(1002957, 1);// 品克缤帽子
		im.gainItem(1052198, 1);// 品克缤套服
		im.gainItem(1702358, 1);//我的朋友品克缤
		im.gainItem(1012057, 1);//透明面具
		im.gainItem(1022048, 1);//透明眼饰
        im.gainItem(2022452, 11);//经验值上升(大)
		im.gainItem(1032024, 1);//透明耳环
		im.gainItem(5150040, 10);// 皇家理发
		im.gainItem(5152053, 10);// 皇家整容
		im.gainItem(5211060, 1, 2 * 60 * 60 * 1000);// 三倍经验
		im.gainItem(5360015, 1, 2 * 60 * 60 * 1000);// 双爆
		im.gainItem(5072000, 50);// 高质地喇叭
		im.gainItem(1190400, 1);//BOSS竞技场徽章
		im.gainItem(1112164, 1);//夏日甜心名片戒指 24小时
		im.gainItem(1112276, 1);//夏日甜心聊天戒指 24小时
		im.gainItem(1112918, 1, 5);// 回归戒指 X1 24小时
		im.sendOk("恭喜您获得 #r管理员送出的礼物#k 。");
		im.worldSpouseMessage(0x20,"『欢迎新人』：恭喜玩家 "+ im.getChar().getName() +" 驾驶着UFO成功降落到盛小冒险岛。大热烈祝贺他(她)吧。");
		im.dispose(); 
}
