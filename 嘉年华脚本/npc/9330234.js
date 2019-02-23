/*
 完成时间：2016年3月4日 12:13:28
 脚本功能：每日福利整合
 */


var selects;
var _mode;
var iconQ = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var EventList = Array(
		//名称，介绍的内容，NPCID，NPCMODE
		Array("金币任务", "完成可获得金币", 9310074, "jinbirw"),
		Array("BOSS任务", "完成可获得BOSS币", 9310074, "xingxingrw"),
		Array("点券任务", "每完成一回领中介币", 9310074, "DIANQUA"),
		Array("破攻任务", "每完成一回领破攻材料", 9310074, "tuporenwu")
);
var heart = "#fEffect/CharacterEff/1042176/0/0#"
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		var text = "#d┏━━━━━━━━━━跑环任务中心━━━━━━━━━┓\r\n";
		for (var i = 0; i < EventList.length; i++) {
			var name = EventList[i][0];
			var desc = EventList[i][1];
			text += "#L" + i + "##d" + heart + " ※ #r" + name + "#d ※ " + rightPadding(desc, 25) + heart + " #l\r\n\r\n";
		}
		text += "┗━━━━━━━━━━━━━━━━━━━━━━━━━┛";
		cm.sendSimple(text)
	} else if (status == 1) {
		selects = selection;
		var npc = EventList[selects][2];
		var mode = EventList[selects][3];
		cm.dispose();
		cm.openNpc(npc, mode);
	}
}

function len(s) {
	var l = 0;
	var a = s.split("");
	for (var i = 1; i < a.length; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l++;
		} else {
			l+= 2;
		}
	}
	return l;
}

function rightPadding(text, padding) {
	var length = len(text);
	var lastLength = padding-length;
	if (lastLength>0) {
		for(var i=0; i<lastLength; i++) {
			text+=" ";
		}
	}
	return text;
}