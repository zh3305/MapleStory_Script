/*
	传送NPC
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
	}
        status--;
    }
    if (status == 0) {
	if (cm.getMapId() == 240050400) {
	    cm.sendYesNo("你确定想离开这里,前往#m240040700#吗?");
	} else {
	    cm.sendYesNo("你确定想离开这里,前往#m240040700#吗?");
	}
    } else if (status == 1) {
	if (cm.getMapId() == 240050400) {
	    cm.warp(240050000, 0);
	} else {
	    cm.warp(240040700, 0);
	}
	cm.dispose();
    }
}
