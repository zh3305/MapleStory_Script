/* RED Zero
    Sunny
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("You must have some business to take care of here, right?");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("This will not be a short flight, so if you need to take care of some things, I suggest you do that first before getting on board. Do you still wish to board the ship?");
	} else if (status == 1) {	
        cm.warp(220000110,0);	
	    cm.dispose(); 
    }
}