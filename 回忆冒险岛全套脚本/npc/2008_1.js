var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

var status = -1;

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
		if (cm.getBossLogAcc("推广设置")>=0) {
			cm.dispose();
			cm.openNpc(2008, 3);
			return;
		}
		if (cm.getBossLog("新手驾到")>=0) {
			var text = head+"#d再次欢迎来到 #r回忆冒险岛#k #d,我们将赠送您：\r\n\r\n";
			text+="#v2431719##v2430241##v2431673##v5340000##v2300000##v1112941##v5000054#\r\n";
			text+="#b"+icon+" 本服为仿官方模式  经验#r30#b倍  金币#r10#b倍  爆率#r5#b倍\r\n";
			text+=""+icon+" 主菜单在拍卖按钮(或输入@pm),提供各种便捷服务\r\n";
			text+=""+icon+" 拍卖处的游戏商店分类很多种，详情请看说明。\r\n";
			text+=""+icon+" 每日福利，独家副本，海量点卷雪花币等你来领\r\n";
			text+=""+icon+" 为帮助您能顺利成长,我们还为您准备了#r七天登录奖励#b。\r\n";
			text+=""+icon+" 最后祝您游戏愉快，不懂可以看背包里的 #r毛莫的信#k#b。\r\n";
			text+=""+icon+" 如果真心不会请加我们的玩家交流群：#e#r416157845#n#k";
			cm.sendSimple(text);
		} else {
			cm.dispose();
			cm.openNpc(2008,2);
		}
	} else if (status == 1) {
		cm.dispose();
		cm.setBossLog("新手驾到", 0, -2);
		cm.gainItem(2431719, 1);
		cm.gainItem(2430241, 1);
		cm.gainItem(2431673, 1, 60);
		cm.gainMeso(100000);
		cm.warp(50000);
		cm.openNpc(2008, 2);
		cm.worldSpouseMessage(0x15,"『新手驾到』：恭喜玩家 "+ cm.getChar().getName() +" 来到了回忆冒险岛。热烈祝贺他(她)吧。");
	}
}