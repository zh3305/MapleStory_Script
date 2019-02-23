var status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var itemList = Array(
1212068,// 紫金枫叶双头杖 ,// (无描述)
1222063,// 紫金枫叶灵魂手铳,// (无描述)
1232070,// 紫金枫叶亡命剑,// (无描述)
1242075,// 紫金枫叶能量剑,// (无描述)
1302212,// 紫金枫叶战剑,// (无描述)
1312114,// 紫金枫叶斧,// (无描述)
1322154,// 紫金枫叶钉头锤,// (无描述)
1332186,// 紫金枫叶龙牙破,// (无描述)
1362060,// 紫金枫叶神秘天空之杖,// (无描述)
1372131,// 紫金枫叶双翼短杖,// (无描述)
1382160,// 紫金枫叶治愈长杖,// (无描述)
1402145,// 紫金枫叶巨剑,// (无描述)
1412102,// 紫金枫叶蝶翼斧,// (无描述)
1422105,// 紫金枫叶锤,// (无描述)
1432135,// 紫金枫叶枪,// (无描述)
1442173,// 紫金枫叶半月矛,// (无描述)
1452165,// 紫金枫叶弓,// (无描述)
1462156,// 紫金枫叶弩,// (无描述)
1472177,// 紫金枫叶黑色拳套,// (无描述)
1482138,// 紫金枫叶血色拳爪,// (无描述)
1492138,// 紫金枫叶短枪,// (无描述)
1522068,// 紫金枫叶双弩枪,// (无描述)
1532073,// 紫金枫叶手炮,// (无描述)
1132151,// 紫金枫叶腰带,// (无描述)
1152088,// 紫金枫叶肩章,// (无描述)
1003529,// 紫金枫叶黄金帽,// (无描述)
1102394,// 紫金枫叶披风,// (无描述)
1052457,// 紫金枫叶套装,// (无描述)
1082430,// 紫金枫叶手套,// (无描述)
1112742,// 紫金枫叶戒指,// (无描述)
1113035,// 紫金枫叶戒指,// (无描述)
1072660// 紫金枫叶鞋,// (无描述)
);
var idx = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = head+"挑选一下你需要的装备吧。\r\n";
		for (var key in itemList) {
			var itemid = itemList[key];
			text +="#L"+key+"##b#z"+itemid+":##k - #r需要66个红蜗牛壳#l#k\r\n";
		}
		cm.sendSimple(text);
		//cm.dispose();
	} else if (status == 1) {
		idx = selection;
		cm.sendYesNo("是否要使用66个蜗牛壳兑换一个#b#v"+itemList[idx]+"##t"+itemList[idx]+"#");
	} else if (status == 2) {
		var needItem = 4000016;
		if (cm.haveItem(needItem, 66) && cm.haveSpace(1)) {
			cm.gainItem(needItem, -66);
			cm.gainItem(itemList[idx], 1);
			cm.sendOk("兑换成功!");
			cm.dispose();
		} else {
			cm.sendOk("你的蜗牛壳数量不够或者装备栏没有空间了。");
			cm.dispose();
		}
	}
}