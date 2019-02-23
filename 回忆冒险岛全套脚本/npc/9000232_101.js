var status = -1;
var text = "";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
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
		var text = "";
		if (cm.getBossLog("通过陷阱")>=2) {
			text ="今日已经完成了2次次，本次无奖励。";
			cm.dispose();
			cm.warp(910000000);
			cm.sendOk(text);
			return;
		}
		if (cm.haveSpace(4)) {
			text+="小伙子不错啊，居然能走到这里，这是给你的奖励，收下吧。";
			cm.sendSimple(text);
		} else {
			text= "其他栏位置不足，无法领取奖励，整理一下吧！";
			cm.sendOk(text);
			cm.dispose();
		}
		
	} else if (status == 1) {
		cm.dispose();
		cm.gainItem(4000313, 50);
		cm.gainMeso(500000);
		cm.setBossLog("通过陷阱");
		cm.warp(910000000);
	}
}