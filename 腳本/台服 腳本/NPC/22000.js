/* RED 1st impact
    Vasily (Maple Return skill)
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("Do you still have some things to take care of here?");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("This ship will arrive at the Six Path Crossway one minute after departure. If you need to take care of any urgent business here, you'd better handle that first. Are you ready to embark?");
	} else if (status == 1) {
	    cm.warp(104020000,0);
		cm.dispose();
    }
  }