/* Dawnveil
    Cab
	Regular Cab in Victoria
    Made by Daenerys
*/
var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("This town is full of things to see. Of couse, if you want to move to a different town or to White Wave Harbor, please use our taxi.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("Hello! I'm #p1012000#, and I am here to take you to your destination, quickly and safely. #b#p1012000##k values your satisfaction, so you can always reach your destination at an affordable price. I am here to serve you.");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 2003 || job == 3001) {
	    var selStr = "I offer a special 90 % discount for beginners. Please choose your destination.";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "#b\r\n#L" + i + "##m" + maps[i] + "# (100 mesos)#l";
		}
	    }
	} else {
	    var selStr = "Choose your destination, for fees will change from place to place.#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (1000 mesos)#l";
		}
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 2003 || job == 3001) {
	    sCost = 100;
	    show = 100;
	} else {
	    sCost = 1000;
	    show = 1000;
	}
	cm.sendYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[selection] + "##k? It'll cost you #b" + show + " mesos#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}