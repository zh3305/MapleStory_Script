var status = -1;
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
		cm.setTodayOnlineTime(500);
		var text = "#L1#"+ttt6+"在线积分\t\t\t\t[抵用券-椅子-点装-大神饰品]#l\r\n";
		text += "#L2#"+ttt6+"在线时间\t\t\t\t[黄-蓝-绿]兑换后清零在线时间#l\r\n";
		text += "#L3#"+ttt6+"在线时间\t\t\t\t[抵用券-椅子-点装-大神饰品]#l\r\n";
		cm.sendSimple(text);
	}
}