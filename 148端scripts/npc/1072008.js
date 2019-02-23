/**
	Author: xQuasar
	NPC: Kyrin - Pirate Job Advancer
	Inside Test Room
**/

var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (status == -1) {
	if (cm.getMapId() == 912040000) {
	    if (!(cm.haveItem(4031013,30))) {
		cm.sendNext("Go, and get me 30 #bDark Marbles#k.");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("Wow, you have brought me 30 #bDark Marbles#k! Congratulations. Let me warp you out now.");
	    }
	} else if (cm.getMapId() == 912040005) {
	    if (!(cm.haveItem(4031013,30))) {
		cm.sendNext("Go, and get me 30 #bDark Marbles#k.");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("Wow, you have brought me 30 #bDark Marbles#k! Congratulations. Let me warp you out now.");
	    }
	} else {
	    cm.sendNext("Error. Please report this.");
	    cm.dispose();
	}
    } else if (status == 2) {
	cm.warp(120000101,0);
	cm.dispose();
    }
}