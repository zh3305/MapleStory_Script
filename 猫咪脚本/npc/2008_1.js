function start() {
	cm.gainItem(2431719, 1);
	cm.gainItem(2430241, 1);
	cm.gainItem(2431673, 1, 3);
	cm.gainMeso(100000);
	cm.warp(50000);
	cm.sendOk("#d欢迎来到 #r猫咪冒险岛#k #d,先来大概了解一下本服特色：\r\n\r\n#b· 本服为仿官方模式  经验50倍  金币10倍  爆率20倍\r\n· 主菜单在拍卖按钮(商城按钮旁边),提供各种便捷服务\r\n· 拍卖处的游戏商店分类很多种，详情请看说明。\r\n· 各种特色副本，组队任务，以及BOSS副本。\r\n· 为帮助您能顺利成长,我们准备了新手礼包给您\r\n· 最后祝您游戏愉快，不懂可以看背包里的 #r毛莫的信#k#b。\r\n· 如果真心不会请加我们的玩家交流群：#e#r24392737#n#k");
	cm.worldSpouseMessage(0x12,"『新手驾到』：恭喜玩家 "+ cm.getChar().getName() +" 来到了猫咪冒险岛。热烈祝贺他(她)吧。");
	cm.dispose();
}