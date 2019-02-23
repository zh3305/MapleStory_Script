/*
   宠物购买
*/

var petList = Array(
    Array(5000424, 300000), //棉花糖-羊咩咩
	Array(5000191, 300000),//神马
	Array(5000274, 300000),//豆豆蛇
	Array(5000368, 250000),//快乐豆豆
	Array(5000203, 20000),//鹦鹉啾啾
	Array(5000067, 30000),//淘气小外星人
	Array(5000237, 30000), //坠落的小流星
	Array(5000027, 10000),//猪八戒
	Array(5000403, 100000),//小士兵阿红
	Array(5000404, 100000),//小士兵阿蓝
	Array(5000287, 50000),
	Array(5000089, 60000),//独角兽迪埃尔
	Array(5000090, 60000),//独角兽吉尼
	Array(5000091, 60000),//独角兽埃塞尔
	Array(5000243, 50000), //粉红龙
	Array(5000244, 50000),//冰龙
	Array(5000245, 50000),//红色龙
	Array(5000249, 50000), //米小熊
	Array(5000250, 50000), //粉小熊
	Array(5000251, 50000), //蓝小熊
	Array(5000275, 50000), //松鼠阿伦
	Array(5000276, 50000),//松鼠珉特
	Array(5000277, 50000), //松鼠粉粉
	Array(5000320, 50000),//铠鼠爱因
	Array(5000321, 50000),//铠鼠居里
	Array(5000322, 50000),//铠鼠牛顿
	Array(5000342, 50000), //小栗栗葱头
	Array(5000343, 50000),//小栗栗朱头
	Array(5000344, 50000),//小栗栗黑头
	Array(5000345, 30000),//贝勒德
	Array(5000268, 30000),//甜心蝴蝶
	Array(5000290, 100000),//天使提尔
	Array(5000291, 100000),//天使拉尔
	Array(5000292, 100000),//天使米尔
	Array(5000294, 50000),//薄荷鲁提
	Array(5000295, 50000),//紫色鲁提
	Array(5000293, 50000), //蜜桃鲁提
	Array(5000369, 100000),//小拉伊
	Array(5000370, 100000),//小波波
	Array(5000371, 100000),//小阿尔
	Array(5000425, 50000), //绿抹茶君
	Array(5000426, 50000),//红茶妹
	Array(5000414, 50000),//小亚敏
	Array(5000409, 100000),//小瑞恩
	Array(5000415, 60000),//布迪 斯乌
	Array(5000416, 60000),//布迪 奥尔卡
	Array(5000417, 60000),//布迪 格里梅尔
	Array(5000281, 60000),//New麦图斯
	Array(5000282, 60000),//New摩斯
	Array(5000283, 60000),//New迪亚
	Array(5000391, 30000),//黄金虾
	Array(5000308, 50000)
);
var status = 0;
var petid = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var text = "我驯养了这么多神兽，少侠，搞两只呗！\r\n";
			for(var key in petList) {
				var pet = petList[key];
				text+="#L"+key+"##i"+pet[0]+":##b#z"+pet[0]+":#\t#r"+pet[1]+"点卷#k#l\r\n";
			}
			cm.sendSimple(text);
		} else if (status == 1) {
			petid = selection;
			var pet = petList[petid];
			var petname = cm.getItemName(pet[0]);
			var petprice = pet[1];
			cm.sendYesNo("是否要花费#r"+petprice+"#k点卷购买宠物#b<"+petname+">#k？");
		} else if (status == 2) {
			if (!cm.haveSpace(5)) {
				cm.sendOk("特殊栏空间不足，无法购买！");
				cm.dispose();
				return;
			}
			var idx = petid;
			var pet = petList[idx];
			var petprice = pet[1];
			var itemid = pet[0];
			if (cm.getPlayer().getCSPoints(1)<petprice) {
				cm.sendOk("点卷不足，购买失败！");
				cm.dispose();
				return;
			}
			cm.gainNX(1, -petprice);
			cm.gainPet(itemid, cm.getItemName(itemid), 1, 0, 100, 30*86400, 0); 
			cm.sendOk("恭喜，成功购买了一只#b#v"+itemid+"##t"+itemid+"##k。");
			cm.dispose();
		}
	}
}