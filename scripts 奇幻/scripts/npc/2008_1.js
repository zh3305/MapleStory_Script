 /*
 夕阳制作★China冒险岛
 完成时间：2015年4月28日 16:34:19
 脚本功能：新手礼包
 */
function start() {
	cm.gainItem(2431719, 1); //毛莫的信
	cm.gainItem(2430505, 1);	// 星之力戒指
	cm.gainItem(2430241, 1); //可爱新手礼物套装
	cm.gainItem(1002186,1,7);//透明头盔
    cm.gainItem(1102039,1,7);//透明披风
    cm.gainItem(1092064,1,7);//透明盾牌
    cm.gainItem(1702224,1,7);//透明装备
	cm.gainItem(1012057,1,7);//透明面具
	cm.gainItem(1022048,1,7);//透明脸饰
	cm.gainItem(1032024,1,7);//透明耳环
	cm.gainItem(1072407, 1);// HELLO喵喵拖
	cm.gainItem(1082170, 1);// 粉色电子表
	cm.gainItem(1042096, 1);// 超人衣服
	cm.gainItem(1062098, 1);// 牛仔裤子
	cm.gainItem(1112116, 1);//白云戒指
	cm.gainItem(1112226, 1);//白云戒指
	cm.gainItem(2430123, 1);//随身NPC
	cm.gainItem(2501000, 1);// 技能点初始化卷轴
    cm.gainItem(2500000, 1);// 属性点初始化卷轴
	cm.gainItem(3010813,1,7);//爱情水晶球椅子7天
	cm.gainMeso(300000);
	cm.warp(50000);
	cm.sendOk("#d欢迎来到 #rChina冒险岛#k #d,先来大概了解一下本服特色：\r\n\r\n#b· 本服为仿官方模式  经验38倍  金币5倍  爆率10倍\r\n· 主菜单在拍卖按钮(商城按钮旁边),提供各种便捷服务\r\n· 拍卖处的游戏商店分类很多种，详情请看说明。\r\n· 各种特色副本，组队任务，以及BOSS副本。\r\n· 为帮助您能顺利成长,我们准备了新手礼包给您\r\n· 最后祝您游戏愉快，不懂可以看背包里的 #r毛莫的信#k#b。\r\n· 如果真心不会请加我们的玩家交流群：#e#r464435912#n#k");
	cm.worldSpouseMessage(0x12,"『新手驾到』：恭喜玩家 "+ cm.getChar().getName() +" 来到了China冒险岛。热烈祝贺他(她)吧。");
	cm.dispose();
}
