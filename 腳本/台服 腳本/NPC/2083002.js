/*
	Crystal of Roots - Leafre Cave of life
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == -1) {
        cm.sendOk("想好後在與我說話.");
	cm.dispose();
    } else if (status == 0) {
	if (cm.getMapId() == 240050400) {
	    cm.sendYesNo("要回到#m240050000#嗎?");
	} else {
	    cm.sendYesNo("要停止遠征隊到外面去嗎? 一天只能進去2次，退場的話就會減少1次入場次數.");
	}
    } else if (status == 1) {
	if (cm.getMapId() == 240050400) {
	    cm.warp(240050000, 0);
	} else {
	    cm.warp(240050400, 0);
	}
	cm.dispose();
    } else {
        cm.dispose();
    }
}