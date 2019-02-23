/* RED Zero
    Cherry
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNext("Let me know when you're ready to board.");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendYesNo("This will not be a short flight, so if you need to take care of some things, I suggest you do that first before getting on board. Do you still wish to board the ship?");
	} else if (status == 1) {	
        cm.warp(200000100,0);	
	    cm.dispose(); 
    }
}