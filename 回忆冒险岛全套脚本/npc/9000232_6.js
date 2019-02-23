var status = -1;
var text = "";
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
		text = "来吧，战个痛快！\r\n#b";
		text += "#L603#"+icon+" #k猜拳PK版#b #r#e[HOT]#n#k#l\r\n";
		text += "#L601#"+icon+" #k猜拳小游戏#b <大量暴风币、游戏币> #r[无次数限制]#b#l\r\n";
		text += "#L602#"+icon+" #k解锁小游戏#b <1000抵用奖励> #r[无次数限制]#b#l\r\n";
		text += "#L0#"+icon+" #k通过陷阱#b <大量游戏币、黄金枫叶> #r[每日两次]#b#l\r\n";
		text += "#L1#"+icon+" #k攀爬城墙#b <大量游戏币、黄金枫叶> #r[每日五次]#b#l\r\n";
		text += "\r\n#k更多小游戏，敬请期待..."
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection < 100 ) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(301050300,0);
			} else if (selection == 1) {
				cm.dispose();
				cm.warp(301050200,0);
			}
			return;
		}
		var npcMode = selection;
		cm.dispose();
		cm.openNpc(9000232, npcMode);
	}
}