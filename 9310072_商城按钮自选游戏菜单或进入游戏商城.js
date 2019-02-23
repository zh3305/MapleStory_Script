var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		cm.sendSimple("#b#L0#打开游戏菜单#l\r\n#L1#进入游戏商城#l");
	} else {
		cm.dispose();
		if (selection == 0) {
			cm.openNpc(9900004);
		} else {
			cm.EnterCS();
		}
	}
}