importPackage(Packages.tools.packet);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("Good items break easy. You should repair them once in a while.");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("I'll be on repair duty for a while.\r\nDo you have something to repair?");
	} else if (status == 1) {
        cm.sendRepairWindow();
        cm.dispose();
    }
}