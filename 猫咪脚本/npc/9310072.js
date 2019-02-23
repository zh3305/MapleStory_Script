/*
	转盘抽奖
*/

var status = -1;
var text;

function start() { 
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}

		playerNX = cm.getNX(1);
		if (status == -1) {
			cm.dispose();
			return;
		} else if (status == 0) {
			//cm.gainItem(2431092, 1);
			cm.sendSimple("#b#L0#领取金币#l\r\n#L1#重置记录#l");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getEventCount("test") == 0) {
					cm.setEventCount("test");
					cm.gainMeso(1);
				} else {
					cm.sendOk(cm.getEventCount("test"));
				}
			} else {
				cm.resetEventCount("test");
				cm.sendOk("重置完成");
			}
			cm.dispose();
			return;
		}
	}
}